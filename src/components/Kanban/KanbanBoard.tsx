import  { useCallback, useEffect, useState } from "react";
import Column from "./Column";
import type { BoardState, CardData, ColumnKey, DragSource, DragDest } from "../../types/kanbantypes";
import type { JSX } from "react/jsx-runtime";


const STORAGE_KEY = "kanban-board-v1";

const initial: BoardState = {
  todo: [
    { id: "c1", title: "Learn native DnD", desc: "Read MDN + try examples" },
    { id: "c2", title: "Build ProfileCard", desc: "From yesterday's task" },
  ],
  doing: [{ id: "c3", title: "Navbar polish", desc: "Responsive tweaks" }],
  done: [{ id: "c4", title: "Vite setup", desc: "Project created" }],
};

function loadFromStorage(): BoardState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initial;
    return JSON.parse(raw) as BoardState;
  } catch {
    return initial;
  }
}

function saveToStorage(state: BoardState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export default function KanbanBoard(): JSX.Element {
  const [board, setBoard] = useState<BoardState>(() => loadFromStorage());

  useEffect(() => {
    saveToStorage(board);
  }, [board]);

  const addCard = useCallback((columnKey: ColumnKey, title: string) => {
    if (!title.trim()) return;
    const newCard: CardData = {
      id: `c_${Date.now()}`,
      title: title.trim(),
      desc: "",
    };
    setBoard((prev) => ({
      ...prev,
      [columnKey]: [newCard, ...prev[columnKey]],
    }));
  }, []);

  const moveCard = useCallback((source: DragSource, dest: DragDest) => {
    if (!source || !dest) return;
    setBoard((prev) => {
      // clone lists
      const sourceList = [...prev[source.column]];
      const [moved] = sourceList.splice(source.index, 1);
      const destList = [...prev[dest.column]];
      // If moving within same column and source.index < dest.index, adjust dest index
      let insertIndex = dest.index;
      if (source.column === dest.column && source.index < dest.index) {
        insertIndex = dest.index - 1;
      }
      destList.splice(insertIndex, 0, moved);
      return {
        ...prev,
        [source.column]: sourceList,
        [dest.column]: destList,
      };
    });
  }, []);

  return (
    <div className="p-6 space-y-6  border-red-600 border-3">
      <header className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Kanban Board</h2>
        <div className="text-sm text-gray-600">
          Drag cards to reorder or move between columns
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Column
          columnKey="todo"
          title="To Do"
          cards={board.todo}
          onAdd={(title) => addCard("todo", title)}
          onMoveCard={moveCard}
        />
        <Column
          columnKey="doing"
          title="Doing"
          cards={board.doing}
          onAdd={(title) => addCard("doing", title)}
          onMoveCard={moveCard}
        />
        <Column
          columnKey="done"
          title="Done"
          cards={board.done}
          onAdd={(title) => addCard("done", title)}
          onMoveCard={moveCard}
        />
      </div>
    </div>
  );
}
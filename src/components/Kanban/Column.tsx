import React, { useRef, useState } from "react";
import Card from "./Card";
import type { CardData, ColumnKey, DragSource, DragDest } from "../../types/kanbantypes";
import type { JSX } from "react/jsx-runtime";


interface ColumnProps {
  columnKey: ColumnKey;
  title: string;
  cards: CardData[];
  onAdd: (title: string) => void;
  onMoveCard: (source: DragSource, dest: DragDest) => void;
}

export default function Column({
  columnKey,
  title,
  cards = [],
  onAdd,
  onMoveCard,
}: ColumnProps): JSX.Element {
  const [newTitle, setNewTitle] = useState("");
  const containerRef = useRef<HTMLDivElement | null>(null);

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const raw = e.dataTransfer.getData("application/x-kanban-card");
    if (!raw) return;
    const source: DragSource = JSON.parse(raw) as DragSource;

    const destJson = e.dataTransfer.getData("application/x-kanban-dest");
    let dest: DragDest;
    if (destJson) {
      const parsed = JSON.parse(destJson) as { index: number };
      dest = { column: columnKey, index: parsed.index };
    } else {
      dest = { column: columnKey, index: cards.length };
    }

    onMoveCard(source, dest);
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    // allow drop
  }

  function handleAdd(e?: React.FormEvent) {
    e?.preventDefault();
    const t = newTitle.trim();
    if (!t) return;
    onAdd(t);
    setNewTitle("");
  }

  return (
    <div
      ref={containerRef}
      className="bg-gray-50 rounded-lg p-3 min-h-[240px] flex flex-col  border-red-600 border-2"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      aria-label={`${title} column`}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-sm text-gray-500">{cards.length}</span>
      </div>

      <form onSubmit={handleAdd} className="mb-3">
        <input
          className="w-full px-3 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder={`Add a card to ${title}`}
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      </form>

      <div className="flex-1 space-y-2 overflow-auto">
        {cards.map((card, idx) => (
          <Card key={card.id} card={card} index={idx} columnKey={columnKey} />
        ))}
      </div>
    </div>
  );
}
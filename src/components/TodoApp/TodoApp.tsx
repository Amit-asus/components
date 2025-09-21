import React, { useMemo, useState } from "react";
import useTodos from "./useTodos";
import TodoItem from "./TodoItem";
import type { Todo } from "../../types/todotypes";
import type { JSX } from "react/jsx-runtime";

type Filter = "all" | "active" | "completed";

export default function TodoApp(): JSX.Element {
  const { todos, add, toggle, remove, update, clearCompleted } = useTodos();
  const [text, setText] = useState("");
  const [note, setNote] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (filter === "active") return todos.filter((t) => !t.completed);
    if (filter === "completed") return todos.filter((t) => t.completed);
    return todos;
  }, [todos, filter]);

  function handleAdd(e?: React.FormEvent) {
    e?.preventDefault();
    const t = text.trim();
    if (!t) return;
    add(t, note.trim() || undefined);
    setText("");
    setNote("");
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Todos</h2>

      <form
        onSubmit={handleAdd}
        className="mb-3 grid grid-cols-1 md:grid-cols-[1fr,200px] gap-2 border border-red-600"
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          className="px-3 py-2 border rounded w-full"
        />
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Optional note"
          className="px-3 py-2 border rounded w-full md:w-auto"
        />
        <div className="md:col-span-2 flex gap-2 mt-2">
          <button
            type="submit"
            className="px-3 py-2 rounded bg-blue-600 text-white"
          >
            Add
          </button>
          <button
            type="button"
            onClick={() => {
              setText("");
              setNote("");
            }}
            className="px-3 py-2 rounded border"
          >
            Clear
          </button>
        </div>
      </form>

      <div className="flex items-center justify-between mb-3 border border-amber-600">
        <div className="flex gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-2 py-1 rounded ${
              filter === "all" ? "bg-blue-600 text-white" : "border"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`px-2 py-1 rounded ${
              filter === "active" ? "bg-blue-600 text-white" : "border"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-2 py-1 rounded ${
              filter === "completed" ? "bg-blue-600 text-white" : "border"
            }`}
          >
            Completed
          </button>
        </div>

        <div className="text-sm text-gray-500">{todos.length} items</div>
      </div>

      <ul className="space-y-2 border border-yellow-400">
        {filtered.map((t: Todo) => (
          <TodoItem
            key={t.id}
            todo={t}
            onToggle={toggle}
            onDelete={remove}
            onUpdate={update}
          />
        ))}
      </ul>

      <div className="mt-4 flex justify-between items-center border border-green-600">
        <button
          onClick={clearCompleted}
          className="px-3 py-2 border rounded text-sm"
        >
          Clear completed
        </button>
        <div className="text-xs text-gray-500">
          Tip: click Edit to change title (blur to save)
        </div>
      </div>
    </div>
  );
}

import { useState, useRef, useEffect } from "react";
import type { Todo } from "../../types/todotypes";


interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, patch: Partial<Todo>) => void;
}

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
  onUpdate,
}: Props) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  function save() {
    const trimmed = title.trim();
    if (!trimmed) {
      onDelete(todo.id);
      return;
    }
    onUpdate(todo.id, { title: trimmed });
    setEditing(false);
  }

  return (
    <li className="flex items-start gap-3 p-2 bg-white rounded shadow-sm">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="mt-1"
      />

      <div className="flex-1">
        {!editing ? (
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1">
              <div
                className={`font-medium ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {todo.title}
              </div>
              {todo.note && (
                <div className="text-xs text-gray-500 mt-1">{todo.note}</div>
              )}
            </div>

            <div className="flex gap-2 ml-3">
              <button
                onClick={() => setEditing(true)}
                className="text-sm px-2 py-1 rounded border"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(todo.id)}
                className="text-sm px-2 py-1 rounded border text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              save();
            }}
            className="flex gap-2 items-center"
          >
            <input
              ref={inputRef}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={save}
              className="flex-1 px-2 py-1 border rounded"
            />
            <button
              type="button"
              onClick={() => {
                setTitle(todo.title);
                setEditing(false);
              }}
              className="px-2 py-1 border rounded"
            >
              Cancel
            </button>
          </form>
        )}
      </div>
    </li>
  );
}

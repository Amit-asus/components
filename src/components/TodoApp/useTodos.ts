import { useEffect, useState, useCallback } from "react";
import type { Todo } from "../../types/todotypes";

const STORAGE_KEY = "TODO-V1";

function load(): Todo[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Todo[]) : [];
  } catch {
    return [];
  }
}

export default function () {
  const [todos, setTodos] = useState<Todo[]>(() => load());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.log("error while changing the todo", error);
    }
  });

  const add = useCallback((title: string, note?: string) => {
    const t: Todo = {
      id: `t_${Date.now()}`,
      title,
      note,
      completed: false,
      createdAt: Date.now(),
    };
    setTodos((prev) => [t, ...prev]);
  }, []);

  const toggle = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }, []);

  const remove = useCallback((id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const update = useCallback((id: string, patch: Partial<Todo>) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, ...patch } : t)));
  }, []);

  const clearCompleted = useCallback(() => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  }, []);

  return { todos, add, toggle, remove, update, clearCompleted, setTodos };
}

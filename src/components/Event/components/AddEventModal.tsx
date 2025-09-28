import React, { useState } from "react";
import type { EventType } from "../../../types/eventType";

type Props = {
  onAdd: (ev: { title: string; date: string; type: EventType }) => void;
};

const AddEventModal: React.FC<Props> = ({ onAdd }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState<EventType>("meeting");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !date) return;
    onAdd({ title, date, type });
    setTitle("");
    setDate("");
    setType("meeting");
    setOpen(false);
  }

  return (
    <div>
      <button onClick={() => setOpen(true)} className="px-3 py-1 bg-blue-600 text-white rounded">
        Add Event
      </button>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30">
          <form onSubmit={submit} className="bg-white p-4 rounded w-80">
            <h3 className="font-bold mb-2">New event</h3>
            <input
              className="w-full mb-2 p-2 border"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="w-full mb-2 p-2 border"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <select
              className="w-full mb-2 p-2 border"
              value={type}
              onChange={(e) => setType(e.target.value as EventType)}
            >
              <option value="meeting">Meeting</option>
              <option value="call">Call</option>
            </select>
            <div className="flex justify-end gap-2">
              <button type="button" onClick={() => setOpen(false)} className="px-3 py-1 border rounded">
                Cancel
              </button>
              <button className="px-3 py-1 bg-green-600 text-white rounded">Create</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddEventModal;

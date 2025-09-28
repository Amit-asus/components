import React, { useState } from "react";
import type { EventType } from "../../../types/eventType";

type Props = {
  onChange: (filters: { type?: EventType }) => void;
};

const Filters: React.FC<Props> = ({ onChange }) => {
  const [type, setType] = useState<"" | EventType>("");

  function handleType(e: React.ChangeEvent<HTMLSelectElement>) {
    const val = (e.target.value || "") as "" | EventType;
    setType(val);
    onChange({ type: val || undefined });
  }

  return (
    <div className="flex gap-2 mb-4">
      <select value={type} onChange={handleType} className="p-2 border rounded">
        <option value="">All types</option>
        <option value="meeting">Meeting</option>
        <option value="call">Call</option>
      </select>
    </div>
  );
};

export default Filters;

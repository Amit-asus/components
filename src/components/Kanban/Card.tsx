import React from "react";
import type { CardData, ColumnKey } from "../../types/kanbantypes";
import type { JSX } from "react/jsx-runtime";

interface CardProps {
  card: CardData;
  index: number;
  columnKey: ColumnKey;
}

export default function Card({ card, index, columnKey }: CardProps): JSX.Element {
  function handleDragStart(e: React.DragEvent<HTMLDivElement>) {
    const data = { column: columnKey, index };
    e.dataTransfer.setData("application/x-kanban-card", JSON.stringify(data));
    e.dataTransfer.effectAllowed = "move";
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const dest = { index };
    e.dataTransfer.setData("application/x-kanban-dest", JSON.stringify(dest));
    e.dataTransfer.dropEffect = "move";
  }

  function handleDragEnd() {
    // optional cleanup
  }

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      className="bg-white rounded-md px-3 py-2 shadow-sm  border-green-300 border-2"
      role="listitem"
      aria-grabbed="false"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <h4 className="font-medium text-sm">{card.title}</h4>
          {card.desc && <p className="text-xs text-gray-500 mt-1">{card.desc}</p>}
        </div>
        <div className="text-xs text-gray-400">⋮</div>
      </div>
    </div>
  );
}
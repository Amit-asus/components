import React from "react";
import type { EventItem as EventItemType } from "../../../types/eventType";

const EventItem: React.FC<{ event: EventItemType }> = ({ event }) => {
  return (
    <div className="p-3 border rounded mb-2">
      <div className="font-semibold">{event.title}</div>
      <div className="text-sm text-gray-600">
        {event.date} • {event.type}
      </div>
    </div>
  );
};

export default EventItem;

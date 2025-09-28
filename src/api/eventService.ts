import type { EventItem, EventType } from "../types/eventType";

let events: EventItem[] = [
  { id: 1, title: "Design sync", date: "2025-10-01", type: "meeting" },
  { id: 2, title: "Frontend retro", date: "2025-10-03", type: "meeting" },
  { id: 3, title: "Project kickoff", date: "2025-10-05", type: "call" },
];

let idCounter = 4;

function fakeNetwork<T>(data: T, delayMs: number = 500): Promise<T> {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      const deepCopy = JSON.parse(JSON.stringify(data));
      resolve(deepCopy as T);
    }, delayMs);
  });
}

export const fetchEvents = async (): Promise<EventItem[]> => {
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  return fakeNetwork(sorted);
};
export const createEvent = async (data: Omit<EventItem, "id">): Promise<EventItem> => {
  const newEvent: EventItem = { id: idCounter++, ...data };
  events = [newEvent, ...events];
  return fakeNetwork(newEvent, 400);
};

export const clearAll = (): void => {
  events = [];
  idCounter = 1;
};

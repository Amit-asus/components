export type EventType = "meeting" | "call";

export interface EventItem {
  id: number | string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  type: EventType;
}
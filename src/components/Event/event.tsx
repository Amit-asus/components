import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EventList from "./components/EventList";
import type { JSX } from "react";

const qc = new QueryClient();

export default function Event(): JSX.Element {
  return (
    <QueryClientProvider client={qc}>
      <div className="max-w-xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Events feed</h1>
        <EventList />
      </div>
    </QueryClientProvider>
  );
}

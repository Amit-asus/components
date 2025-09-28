import { useState, type JSX } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchEvents, createEvent } from "../../../api/eventService";
import EventItem from "./EventItem";
import Filters from "./Filters";
import AddEventModal from "./AddEventModal";
import type { EventItem as EventType } from "../../../types/eventType";

export default function EventList(): JSX.Element {
  const qc = useQueryClient();
  const [filters, setFilters] = useState<{ type?: string }>({});

  const { data: events = [], isLoading } = useQuery<EventType[]>({
    queryKey: ["events"],
    queryFn: fetchEvents,
    staleTime: 60_000,
  });
  const mutation = useMutation<
    EventType, // TData (what the mutation returns)
    Error, // TError
    Omit<EventType, "id">, // TVariables (what you pass to mutate)
    { previous?: EventType[] } // TContext (context you return from onMutate)
  >({
    mutationFn: (newEv) => createEvent(newEv),

    // Optimistic update
    onMutate: async (newEv) => {
      await qc.cancelQueries({ queryKey: ["events"] });

      const previous = qc.getQueryData<EventType[]>(["events"]);

      qc.setQueryData<EventType[]>(["events"], (old = []) => [
        { id: "temp-" + Date.now().toString(), ...newEv },
        ...old,
      ]);

      return { previous };
    },

    // Rollback on error
    onError: (_err, _newEv, ctx) => {
      if (ctx?.previous) qc.setQueryData(["events"], ctx.previous);
    },

    // Refetch after success (or use onSettled)
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["events"] });
    },
    // onSettled: () => qc.invalidateQueries({ queryKey: ["events"] }),
  });

  const handleAdd = (payload: Omit<EventType, "id">) => {
    mutation.mutate(payload);
  };

  const filtered = events.filter((e) => {
    if (!filters.type) return true;
    return e.type === filters.type;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Filters onChange={setFilters as any} />
        <AddEventModal onAdd={handleAdd} />
      </div>

      {isLoading ? (
        <div>Loading events...</div>
      ) : (
        <div>
          {filtered.length === 0 ? (
            <div>No events</div>
          ) : (
            filtered.map((ev) => <EventItem key={String(ev.id)} event={ev} />)
          )}
        </div>
      )}
    </div>
  );
}

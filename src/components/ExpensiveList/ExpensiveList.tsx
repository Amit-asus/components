import React, { useMemo, useState } from "react";

// Fake expensive calculation
function expensiveFilter(numbers: number[], onlyEven: boolean): number[] {
  console.log("Running expensive filter..."); // watch console
  const result = numbers.filter((n) => (onlyEven ? n % 2 === 0 : n % 2 !== 0));

  // simulate slowness
  const start = performance.now();
  while (performance.now() - start < 300) {} // busy wait ~300ms

  return result;
}

export default function ExpensiveList() {
  const [onlyEven, setOnlyEven] = useState(true);
  const [count, setCount] = useState(0);

  const numbers = useMemo(
    () => Array.from({ length: 20 }, (_, i) => i + 1),
    []
  );

  // ✅ memoized expensive calculation
  const filtered = useMemo(
    () => expensiveFilter(numbers, onlyEven),
    [numbers, onlyEven]
  );

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-2">Expensive List</h2>

      <div className="mb-3 flex gap-2">
        <button
          onClick={() => setOnlyEven((e) => !e)}
          className="px-3 py-1 border rounded"
        >
          Toggle {onlyEven ? "Odd" : "Even"}
        </button>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-3 py-1 border rounded"
        >
          Increment counter ({count})
        </button>
      </div>

      <ul className="space-y-1">
        {filtered.map((n) => (
          <li key={n} className="px-2 py-1 border rounded">
            {n}
          </li>
        ))}
      </ul>
    </div>
  );
}

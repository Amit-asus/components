import React, { useCallback, useMemo, useState } from "react";

export default function NumberStats(): JSX.Element {
  const [value, setValue] = useState<string>(""); // input text
  const [numbers, setNumbers] = useState<number[]>([]); // list of numbers

  // add number (parse and guard)
  const addNumber = useCallback(() => {
    const n = Number(value);
    if (Number.isFinite(n)) {
      setNumbers((prev) => [n, ...prev]); // newest first
      setValue("");
    } else {
      // simple feedback — you can replace with toast
      alert("Please enter a valid number");
    }
  }, [value]);

  // memoized heavy-ish calculations: sum and average
  const { sum, avg } = useMemo(() => {
    // simulate a costly operation by doing a small loop (optional)
    // for real cost, you'd replace this with heavier work
    let s = 0;
    for (let i = 0; i < numbers.length; i++) {
      s += numbers[i];
    }
    const a = numbers.length ? s / numbers.length : 0;
    return { sum: s, avg: a };
  }, [numbers]);

  // helpers for quick testing
  const clear = useCallback(() => setNumbers([]), []);
  const fillSample = useCallback(() => setNumbers([10, 20, 30, 40, 50]), []);

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Number Stats (10-min)</h3>

      <div className="flex gap-2 mb-3">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addNumber();
          }}
          placeholder="Type a number and press Enter"
          className="flex-1 px-3 py-2 border rounded"
          inputMode="numeric"
        />
        <button onClick={addNumber} className="px-3 py-2 rounded border">
          Add
        </button>
      </div>

      <div className="mb-3 text-sm text-gray-600 flex items-center justify-between">
        <div>
          Count: <strong>{numbers.length}</strong>
        </div>
        <div>
          Sum: <strong>{sum}</strong> • Avg: <strong>{avg.toFixed(2)}</strong>
        </div>
      </div>

      <div className="mb-3 flex gap-2">
        <button
          onClick={fillSample}
          className="px-2 py-1 border rounded text-sm"
        >
          Fill sample
        </button>
        <button onClick={clear} className="px-2 py-1 border rounded text-sm">
          Clear
        </button>
      </div>

      <ul className="space-y-1 max-h-36 overflow-auto">
        {numbers.length === 0 ? (
          <li className="text-sm text-gray-500">No numbers — add one.</li>
        ) : (
          numbers.map((n, i) => (
            <li
              key={i}
              className="flex justify-between px-2 py-1 border rounded"
            >
              <span>#{i + 1}</span>
              <span className="font-medium">{n}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

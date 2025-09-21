import { useState } from "react";
import type { JSX } from "react/jsx-runtime";
import { Minus, Plus, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

interface CounterProps {
  initial?: number;
  step?: number;
  min?: number;
  max?: number;
  label?: string;
}

export default function Counter({
  initial = 0,
  step = 1,
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY,
  label,
}: CounterProps): JSX.Element {
  const [count, setCount] = useState<number>(initial);
  const isMin = count <= min;
  const isMax = count >= max;

  const inc = () => setCount((c) => Math.min(max, c + step));
  const dec = () => setCount((c) => Math.max(min, c - step));
  const reset = () => setCount(initial);

  return (
    <div className="max-w-sm mx-auto p-5">
      <div className="bg-gradient-to-br from-white/60 to-white/40 dark:from-slate-800/60 dark:to-slate-800/40 backdrop-blur-md rounded-2xl shadow-2xl ring-1 ring-slate-200/60 dark:ring-slate-700/40 p-6">
        {/* Header */}
        {label && (
          <div className="text-center">
            <div className="text-sm font-medium text-slate-500 dark:text-slate-300">
              {label}
            </div>
          </div>
        )}

        {/* Count display */}
        <div className="mt-3 mb-4 text-center">
          <div className="inline-flex items-center justify-center w-full">
            <div className="bg-white/90 dark:bg-slate-900/70 px-6 py-4 rounded-3xl shadow-md border border-slate-100/60 dark:border-slate-700/40 min-w-[120px]">
              <div className="text-4xl font-semibold leading-none text-slate-900 dark:text-white">
                {count}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3">
          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={dec}
            aria-label="decrement"
            className={`flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200/60 dark:border-slate-700/40 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:opacity-40 transition-all select-none ${
              isMin ? "pointer-events-none" : ""
            }`}
            disabled={isMin}
          >
            <Minus size={16} />
            <span className="text-sm font-medium">Decrease</span>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={reset}
            aria-label="reset"
            className={`flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200/60 dark:border-slate-700/40 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all ${
              count === initial ? "opacity-60" : ""
            }`}
            hidden={count === initial}
          >
            <RefreshCw size={16} />
            <span className="text-sm font-medium">Reset</span>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={inc}
            aria-label="increment"
            className={`flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200/60 dark:border-slate-700/40 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:opacity-40 transition-all ${
              isMax ? "pointer-events-none" : ""
            }`}
            disabled={isMax}
          >
            <Plus size={16} />
            <span className="text-sm font-medium">Increase</span>
          </motion.button>
        </div>

        {/* Meta */}
        <div className="mt-4 text-center text-xs text-slate-400">
          step:{" "}
          <span className="font-medium text-slate-600 dark:text-slate-300">
            {step}
          </span>
          <span className="mx-2">•</span>
          min: <span className="font-medium">{isFinite(min) ? min : "—"}</span>
          <span className="mx-2">•</span>
          max: <span className="font-medium">{isFinite(max) ? max : "—"}</span>
        </div>
      </div>
    </div>
  );
}

/*
Usage:
<Counter label="Steps" initial={0} step={1} min={0} max={10} />


*/

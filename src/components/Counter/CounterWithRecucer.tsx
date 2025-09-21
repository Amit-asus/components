import { useReducer } from "react";
type State = { count: number; initial: number; step: number };
type Action =
  | { type: "inc" }
  | { type: "dec" }
  | { type: "reset" }
  | { type: "set"; value: number }
  | { type: "setStep"; step: number };


  function reducer (state  : State , action : Action){
    switch (action.type) {
        case "inc":
          return { ...state, count: state.count + state.step };
        case "dec":
          return { ...state, count: state.count - state.step };
        case "reset":
          return { ...state, count: state.initial };
        case "set":
          return { ...state, count: action.value };
        case "setStep":
          return { ...state, step: action.step };
        default:
          return state;
      }
  }




  export default function CounterWithReducer({ initial = 0, step = 1 }: { initial?: number; step?: number }) {
    const [state, dispatch] = useReducer(reducer, { count: initial, initial, step });
  
    return (
      <div className="w-full max-w-xs bg-white rounded-lg p-4 shadow-sm border">
        <div className="text-3xl text-center">{state.count}</div>
        <div className="mt-3 flex gap-2 justify-center">
          <button onClick={() => dispatch({ type: "dec" })} className="px-3 py-1 border rounded">−</button>
          <button onClick={() => dispatch({ type: "reset" })} className="px-3 py-1 border rounded">Reset</button>
          <button onClick={() => dispatch({ type: "inc" })} className="px-3 py-1 border rounded">+</button>
        </div>
        <div className="mt-2 text-xs text-gray-500 text-center">
          step: {state.step}
        </div>
      </div>
    );
  }
import { useReducer } from "react";

interface State {
  count: number;
  error: string | null;
}

interface Action {
  type: "increment" | "decrement";
}

function reducer(state: State, action: Action) {
  const { type } = action;
  switch (type) {
    case "increment": {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return { ...state, count: hasError ? state.count :newCount ,
        error:hasError ? 'Maximum Reached': null
      };
    }
    case "decrement": {
      const newCount = state.count ;
      const hasError = newCount < 1;
      return { ...state, count: hasError ?state.count:newCount,
        error:hasError ? 'Minimum Reached ':null
      };
    }
    default:
      return state;
  }
}
function Reducer() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });

  return (
    <div>
      <h1>Count : {state.count}</h1>
      {state.error && <div>{state.error}</div>}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button className="mb-2" onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>
    </div>
  );
}

export default Reducer;

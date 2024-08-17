import React, { useReducer } from "react";

interface State {
  items:string [];
  error: string | null;
}
interface Action {
  type: "add" | "remove" | "reset";
  payload?: string;
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "add": {
      if (!action.payload || action.payload.trim() === "") {
        return { ...state, error: "Item cannot be empty" };
      }
      return { ...state, items: [...state.items, action.payload], error: null };
    }

    case "remove": {
        if (state.items.length === 0) {
            return { ...state, error: "No items to remove" };
          }
          return { ...state, items: state.items.slice(0, -1), error: null };
        }

        case "reset": {
            return { ...state, items: [], error: null };
          }
    default:
      return state;
  }

}




function _Reducer() {
        const [state, dispatch] = useReducer(reducer, {
            items: [],
            error: null,
          });
  return (
    <div>
      <ul>
        {state.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input type="text" id="itemInput" placeholder="Enter an item" />
      
      {state.error && <div  style={{ color: "red" }}>{state.error}</div>}
      <button
        onClick={() => { const input = (document.getElementById("itemInput") as HTMLInputElement).value;
          dispatch({ type: "add", payload: input });
        }}
      >
        Add Item
      </button>    
      <button onClick={() => dispatch({ type: "remove" })}>
        Remove Item (-)
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset Item </button>
    </div>
  );
}

export default _Reducer;

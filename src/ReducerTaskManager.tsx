import React, { act, useReducer } from "react";

interface Task {
  id: string;
  description: string;
  completed: boolean;
}

interface State {
  task: Task[];
  error: string | null;
}

interface Action {
  type: "addTask" | "removeTask" | "resetTask" | "toggleTaskCompletion";
  playload?: string;
}
function reducer(state:State, action: Action) {
  switch (action.type) {
    case "addTask":{
      if(!action.playload || action.playload.trim()==="" ){
        return {...state, error: "Task cannot be empty" };
      }
      return{...state,task:[...state.task,action.playload]}
    }
    case "removeTask":
    case "resetTask":
    case "toggleTaskCompletion":
    default:
      return state;
  }
}

function ReducerTaskManager() {
  const [state, dispatch] = useReducer(reducer, {
    task: [],
    error: null,
    id: null,
    description: "",
    completed: false,
  });
  return (
    <div>
<input type="text" id="itemInput" placeholder="Write Task " />
      
      {state.error && <div  style={{ color: "red" }}>{state.error}</div>}      <button onClick={() => dispatch({type:'addTask'})}>Add Task</button>
      <button onClick={() => dispatch({})}>Remove Task</button>
      <button onClick={() => dispatch({})}>Rest Task</button>
    </div>
  );
}

export default ReducerTaskManager;

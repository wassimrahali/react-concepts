import React, { useReducer } from "react";

interface Task {
  id: string;
  description: string;
  completed: boolean;
}

interface State {
  tasks: Task[];
  error: string | null;
}

interface Action {
  type: "addTask" | "removeTask" | "resetTask" | "toggleTaskCompletion";
  payload?: string;
}
function reducer(state: State, action: Action) {
  switch (action.type) {
    case "addTask": {
      if (action.payload?.trim() === "") {
        return { ...state, error: "Task cannot be empty" };
      }
      const newTask: Task = {
        id: Date.now().toString(), // Generate a unique ID
        description: action.payload,
        completed: false,
      };

      return { ...state, tasks: [...state.tasks, newTask] };
    }
    case "removeTask": {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        error: null,
      };
    }
    case "resetTask": {
      return { ...state, tasks: [], error: null };
    }
    case "toggleTaskCompletion": {
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
        error: null,
      };
    }
    default:
      return state;
  }
}

function ReducerTaskManager() {
  const [state, dispatch] = useReducer(reducer, {
    tasks: [],
    error: null,
  });
  return (
    <div>
      <h1>Task Manager</h1>
      <ul>
        {state.tasks.map(task => (
          <li key={task.id}>
            {task.description} - {task.completed ? "Completed" : "Incomplete"}
            <button onClick={() => dispatch({ type: "toggleTaskCompletion", payload: task.id })}>
              Toggle Completion
            </button>
            <button onClick={() => dispatch({ type: "removeTask", payload: task.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <input type="text" id="taskInput" placeholder="Enter a task" />
      {state.error && <div style={{ color: "red" }}>{state.error}</div>}
      <button
        onClick={() => {
          const input = (document.getElementById("taskInput") as HTMLInputElement).value;
          dispatch({ type: "addTask", payload: input });
        }}
      >
        Add Task
      </button>
      <button onClick={() => dispatch({ type: "resetTask" })}>
        Reset Tasks
      </button>
    </div>
  );
}

export default ReducerTaskManager
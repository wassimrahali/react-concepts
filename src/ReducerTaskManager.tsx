import  { useReducer } from "react";

interface Task {
  id: string;
  description: string | undefined;
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
        id: Date.now().toString(),
        description: action.payload,
        completed: false,
      };
      return { ...state, tasks: [...state.tasks, newTask], error: null };
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

// Main component
function TaskManagerTable() {
  const [state, dispatch] = useReducer(reducer, {
    tasks: [],
    error: null,
  });

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="max-w-lg">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
          Task Manager
        </h3>
        <p className="text-gray-600 mt-2">
          Add and manage your tasks effectively in a table format.
        </p>
      </div>

      <div className="mt-4">
        <input
          type="text"
          id="taskInput"
          placeholder="Enter a task"
          className="border p-2 rounded w-full"
        />
        {state.error && <div className="text-red-500 mt-2">{state.error}</div>}
        <div className="space-x-10 space-y-10">
          <button
            onClick={() => {
              const input = (
                document.getElementById("taskInput") as HTMLInputElement
              ).value;
              dispatch({ type: "addTask", payload: input });
            }}
            className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
          >
            <i className="ri-play-list-add-line" >             Add Task
             </i>
          </button>
          <button
            onClick={() => dispatch({ type: "resetTask" })}
            className="block py-3 px-4 font-medium text-center text-white bg-red-600 hover:bg-green-500 active:bg--700 active:shadow-none rounded-lg shadow md:inline"
          >
            Reset Tasks
          </button>
        </div>
      </div>

      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Task Description</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {state.tasks.length > 0 ? (
              state.tasks.map((task) => (
                <tr key={task.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {task.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-2 rounded-full font-semibold text-xs ${
                        task.completed
                          ? "text-green-600 bg-green-50"
                          : "text-blue-600 bg-blue-50"
                      }`}
                    >
                      {task.completed ? "Completed" : "Incomplete"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() =>
                        dispatch({
                          type: "toggleTaskCompletion",
                          payload: task.id,
                        })
                      }
                      className="bg-indigo-600 text-white py-1 px-2 rounded mr-2"
                    >
                      Toggle
                    </button>
                    <button
                      onClick={() =>
                        dispatch({ type: "removeTask", payload: task.id })
                      }
                      className="bg-red-600 text-white py-1 px-2 rounded"
                    >
                      <i className="ri-delete-bin-6-fill"> </i>
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className="px-6 py-4 whitespace-nowrap"
                  colSpan={3}
                  style={{ textAlign: "center" }}
                >
                  No tasks available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TaskManagerTable;

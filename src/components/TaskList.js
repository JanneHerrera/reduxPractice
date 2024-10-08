import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../features/tasks/TaskSlice";
import { Link } from "react-router-dom";
function TaskList() {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
    console.log(id);
  };
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);
  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        {<h1>loading </h1> && <h1>amount of tasks: {tasks.length}</h1>}
        <Link
          to="/create-task"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm "
        >
          Create Task
        </Link>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {tasks.map((task) => {
          return (
            <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
              <header className="flex justify-between">
                <h2>{task.title}</h2>
                <h3>{task.description}</h3>
                <div className="flex gap-x-2">
                  <button
                    onClick={() => {
                      handleDelete(task.id);
                    }}
                    className="bg-red-500 px-2 py-3 text-xs rounded-md self-center"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/edit-task/${task.id}`}
                    className="bg-zinc-600 px-2 py-1 text-xs rounded-md"
                  >
                    Edit Task
                  </Link>
                </div>
              </header>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TaskList;

import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../features/tasks/TaskSlice";
function TaskList() {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
    console.log(id);
  };
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);
  return (
    <div>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <h2>{task.title}</h2>
            <h3>{task.description}</h3>
            <button
              onClick={() => {
                handleDelete(task.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;

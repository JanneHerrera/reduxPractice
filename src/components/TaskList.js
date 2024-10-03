import { useSelector } from "react-redux";
function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);
  return (
    <div>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <h2>{task.title}</h2>
            <h3>{task.description}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;

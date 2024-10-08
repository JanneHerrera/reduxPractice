import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/TaskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(addTask({ ...task, id: uuid() }));
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
    console.log(params);
  }, [params, tasks]);
  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4 mb-2">
      <label htmlFor="title" className="block text-sm font-bold">
        Task:
      </label>
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={handleChange}
        value={task.title}
        className="W-full p-2 rounded-md bg-zinc-600 mb-2"
      />
      <label htmlFor="description" className="block text-sm font-bold">
        description:
      </label>
      <textarea
        type="text"
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={task.description}
        className="W-full p-2 rounded-md bg-zinc-600 mb-2"
      />
      <br />
      <button type="submit"> submit</button>
    </form>
  );
}

export default TaskForm;

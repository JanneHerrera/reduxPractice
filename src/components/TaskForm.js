import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/TaskSlice";
import { v4 as uuid } from "uuid";

function TaskForm() {
  const dispatch = useDispatch();

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
    dispatch(addTask({ ...task, id: uuid() }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="description"
        onChange={handleChange}
      />
      <br />
      <button type="submit"> submit</button>
    </form>
  );
}

export default TaskForm;

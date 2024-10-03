import { useState } from "react";
import { useDispatch } from "react-redux";
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
    console.log(task);
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

import React, { useState } from "react";

const Input = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== "") {
      onAddTask(taskText);
      setTaskText("");
    }
  };

  return (
    <form className="flex gap-5 p-6 w-[700px]" onSubmit={handleSubmit}>
      <input
        id="inputTask"
        type="text"
        placeholder="Type here"
        className="input input-bordered w-[85%]"
        value={taskText}
        onChange={handleInputChange}
      />
      <button type="submit" className="btn btn-success">
        Add task
      </button>
    </form>
  );
};

export default Input;

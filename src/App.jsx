import React, { useState, useEffect } from "react";
import Items from "./components/Items";
import Input from "./components/Input";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: new Date().getTime(),
      text,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const editTask = (taskId) => {
    const newText = prompt("Enter a new task:");
    if (newText !== null) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, text: newText } : task
        )
      );
    }
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <h1 className="text-2xl font-semibold text-black mt-5">
        Todos ({tasks.length})
      </h1>
      <Input onAddTask={addTask} />
      <Items tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
    </>
  );
};

export default App;

import React, { createContext, useState, useEffect } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const dataFromLocalStorage = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(dataFromLocalStorage);

  const [editedTask, setEditedTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: Math.floor(Math.random() * 100000) }]);
  };
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const clearTasks = () => {
    setTasks([]);
  };

  const findTask = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditedTask(item);
  };
  const editTasks = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );
    setTasks(newTasks);
    setEditedTask(null);
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearTasks,
        findTask,
        editTasks,
        editedTask,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;

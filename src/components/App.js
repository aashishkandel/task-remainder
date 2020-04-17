import React from "react";
import TaskList from "./TaskList";
import TaskListContextProvider from "../contexts/TaskListContext";
import TaskForm from "./TaskForm";
import { APPContainer } from "../styledComponents/styled";

const App = () => {
  return (
    <TaskListContextProvider>
      <APPContainer>
        <TaskForm />
        <TaskList />
      </APPContainer>
    </TaskListContextProvider>
  );
};

export default App;

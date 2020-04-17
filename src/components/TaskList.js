import React, { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";
import Task from "./Task";
import { StyledUL, StyledLI } from "../styledComponents/styled";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <StyledUL>
      {tasks.length ? (
        tasks.map((task) => {
          return <Task task={task} key={task.id} />;
        })
      ) : (
        <StyledLI isEmpty>U ain't got nothin' to do, add smthng</StyledLI>
      )}
    </StyledUL>
  );
};

export default TaskList;

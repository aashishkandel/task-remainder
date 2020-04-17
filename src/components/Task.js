import React, { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";
import { StyledLI } from "../styledComponents/styled";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const Task = ({ task }) => {
  const { removeTask, findTask } = useContext(TaskListContext);
  return (
    <StyledLI>
      <div>{task.title}</div>
      <div style={{ marginBottom: "-5px" }}>
        <MdDelete onClick={() => removeTask(task.id)} />
        <FiEdit onClick={() => findTask(task.id)} />
      </div>
    </StyledLI>
  );
};

export default Task;

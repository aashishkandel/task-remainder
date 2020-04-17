import React, { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";
import { StyledLI, IconHolder } from "../styledComponents/styled";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const Task = ({ task }) => {
  const { removeTask, findTask } = useContext(TaskListContext);
  return (
    <StyledLI>
      {task.title}
      <IconHolder>
        <MdDelete
          style={{ cursor: "pointer" }}
          onClick={() => removeTask(task.id)}
        />
        <FiEdit
          style={{ margin: "0 9px", cursor: "pointer" }}
          onClick={() => findTask(task.id)}
        />
      </IconHolder>
    </StyledLI>
  );
};

export default Task;

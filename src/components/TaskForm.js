import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../contexts/TaskListContext";
import { StyledForm, ButtonContainer } from "../styledComponents/styled";

const TaskForm = () => {
  const { addTask, clearTasks, editTasks, editedTask } = useContext(
    TaskListContext
  );
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editedTask) {
      addTask(title);
      setTitle("");
    } else {
      editTasks(title, editedTask.id);
    }
  };

  useEffect(() => {
    if (editedTask) {
      setTitle(editedTask.title);
    } else {
      setTitle("");
    }
  }, [editedTask]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        value={title}
        placeholder="wt u gonna do?"
        required
      />
      <ButtonContainer>
        <button type="submit">{editedTask ? "Edit" : "Add"}</button>
        <button onClick={clearTasks}> Clear</button>
      </ButtonContainer>
    </StyledForm>
  );
};

export default TaskForm;

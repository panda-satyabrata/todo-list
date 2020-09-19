import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../actions/todolistAction";

function AddToDoTask() {
  const [task, setTask] = useState("");
  const taskId = useSelector((state) => state.todos.length);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: taskId + 1,
      task: task,
    };
    console.log(taskId);
    dispatch(addTask(newTodo));
    setTask("");
  };

  return (
    <div className="add-todo-task-container">
      <form className="task-form" onSubmit={handleSubmit} autoComplete="off">
        <input
          className="task-input"
          type="text"
          name="task-input"
          value={task}
          placeholder="What to do today?"
          onChange={(event) => setTask(event.target.value)}
          autoComplete="off"
        />
        <button className="add-button">
          <svg
            className="add-icon"
            width="56"
            height="50"
            viewBox="0 0 56 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 0C12.5599 0 0 11.2142 0 25C0 38.7858 12.5599 50 28 50C43.4401 50 56 38.7839 56 25C56 11.2161 43.4401 0 28 0ZM28 46.1271C14.9543 46.1271 4.3377 36.6499 4.3377 25C4.3377 13.3501 14.9543 3.87295 28 3.87295C41.0457 3.87295 51.6623 13.3501 51.6623 25C51.6623 36.6499 41.0479 46.1271 28 46.1271Z"
              fill="white"
            />
            <path
              d="M38.8575 22.6824H30.1821V14.9365C30.1821 13.8676 29.2126 13 28.0132 13C26.8138 13 25.8443 13.8676 25.8443 14.9365V22.6824H17.1689C15.9695 22.6824 15 23.55 15 24.6189C15 25.6879 15.9695 26.5555 17.1689 26.5555H25.8443V34.3014C25.8443 35.3703 26.8138 36.2379 28.0132 36.2379C29.2126 36.2379 30.1821 35.3703 30.1821 34.3014V26.5555H38.8575C40.0569 26.5555 41.0264 25.6879 41.0264 24.6189C41.0264 23.55 40.0569 22.6824 38.8575 22.6824Z"
              fill="white"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default AddToDoTask;

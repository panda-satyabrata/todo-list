import React from "react";
import TaskList from "./TaskList";
import AddToDoTask from "./AddToDoTask";
import "./ToDoList.css";

function ToDoList() {
  return (
    <div className="todolist-app">
      <AddToDoTask />
      <TaskList />
    </div>
  );
}

export default ToDoList;

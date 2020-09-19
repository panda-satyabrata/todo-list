import React from "react";
import { useSelector } from "react-redux";
import { deleteTask } from "../actions/todolistAction";
import { useDispatch } from "react-redux";

function TaskList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleClick = (event, id) => {
    event.preventDefault();
    dispatch(deleteTask(id));
  };

  return (
    <div className="task-list-container">
      <svg
        viewBox="0 0 0 0"
        style={{ position: "absolute", zIndex: -1, opacity: 0 }}
      >
        <defs>
          <linearGradient
            id="boxGradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="25"
            y2="25"
          >
            <stop offset="0%" stop-color="#27FDC7" />
            <stop offset="100%" stop-color="#0FC0F5" />
          </linearGradient>

          <linearGradient id="lineGradient">
            <stop offset="0%" stop-color="#0FC0F5" />
            <stop offset="100%" stop-color="#27FDC7" />
          </linearGradient>

          <path
            id="todo__line"
            stroke="url(#lineGradient)"
            d="M21 12.3h168v0.1z"
          ></path>
          <path
            id="todo__box"
            stroke="url(#boxGradient)"
            d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"
          ></path>
          <path
            id="todo__check"
            stroke="url(#boxGradient)"
            d="M10 13l2 2 5-5"
          ></path>
          <circle id="todo__circle" cx="13.5" cy="12.5" r="10"></circle>
        </defs>
      </svg>

      <ul>
        {todos.map((todo) => (
          <div className="todo-list-wrapper">
            <div className="todo-list">
              <label className="todo">
                <input
                  className="todo__state"
                  type="checkbox"
                  value={todo.task}
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 200 25"
                  class="todo__icon"
                >
                  <use xlinkHref="#todo__line" class="todo__line"></use>
                  <use xlinkHref="#todo__box" class="todo__box"></use>
                  <use xlinkHref="#todo__check" class="todo__check"></use>
                  <use xlinkHref="#todo__circle" class="todo__circle"></use>
                </svg>

                <div class="todo__text">{todo.task}</div>

                <ion-icon name="trash-outline"></ion-icon>
              </label>
              <span
                className="delete-button"
                onClick={(event) => handleClick(event, todo.id)}
              >
                <svg
                  className="delete-icon"
                  width="52"
                  height="45"
                  viewBox="0 0 52 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.853 11.1123V8.12756C33.853 6.84184 32.6857 5.83164 31.2 5.83164H20.8C19.3143 5.83164 18.1469 6.84184 18.1469 8.12756V11.1123H7.05713V13.8674H10.4L13.053 39.7653C13.1061 40.4541 13.7959 41.0051 14.6449 41.0051H37.4081C38.2571 41.0051 38.9469 40.4541 39 39.7653L41.653 13.8674H45.049V11.1123C45.049 11.1123 33.853 11.1123 33.853 11.1123ZM21.3306 8.58674H30.6694V11.1123H21.3306V8.58674ZM35.9224 38.25H16.0245L13.5306 13.8674H38.3102L35.9224 38.25Z"
                    fill="url(#paint0_linear)"
                  />
                  <path
                    d="M33.7469 17.9541L30.5632 17.8623L29.8734 34.1633L33.0571 34.2551L33.7469 17.9541Z"
                    fill="url(#paint1_linear)"
                  />
                  <path
                    d="M22.1265 34.1633L21.4367 17.8623L18.2531 17.9541L18.9428 34.2551L22.1265 34.1633Z"
                    fill="url(#paint2_linear)"
                  />
                  <path
                    d="M27.5918 17.9082H24.4081V34.2092H27.5918V17.9082Z"
                    fill="url(#paint3_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="26.053"
                      y1="3.55868"
                      x2="26.053"
                      y2="41.4354"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#00EFD1" />
                      <stop offset="1" stop-color="#00ACEA" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear"
                      x1="31.8102"
                      y1="3.55869"
                      x2="31.8102"
                      y2="41.4354"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#00EFD1" />
                      <stop offset="1" stop-color="#00ACEA" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear"
                      x1="20.1898"
                      y1="3.55869"
                      x2="20.1898"
                      y2="41.4354"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#00EFD1" />
                      <stop offset="1" stop-color="#00ACEA" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear"
                      x1="26"
                      y1="3.55868"
                      x2="26"
                      y2="41.4354"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#00EFD1" />
                      <stop offset="1" stop-color="#00ACEA" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>

              <br></br>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

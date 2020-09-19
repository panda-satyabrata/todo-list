export const addTask = (todo) => {
  return {
    type: "ADD_TASK",
    payload: todo,
  };
};

export const deleteTask = (id) => {
  return {
    type: "DELETE_TASK",
    payload: id,
  };
};

export const updateTask = (todo) => {
  return {
    type: "UPDATE_TASK",
    payload: todo,
  };
};

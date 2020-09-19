const todolistInitialState = [
  {
    id: 1,
    task: "Be creative!",
  },
];

const todolistReducer = (state = todolistInitialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "UPDATE_TASK":
      return state.map((todo, index) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            id: action.payload.id,
            task: action.payload.task,
          };
        }
        return todo;
      });
    case "DELETE_TASK":
      return state.filter((todo, index) => {
        if (todo.id === action.payload) {
          return false;
        }
        return true;
      });
    default:
      return [...state];
  }
};

export default todolistReducer;

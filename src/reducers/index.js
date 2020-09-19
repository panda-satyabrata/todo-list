import { combineReducers } from "redux";
import todolistReducer from "./todolistReducer";

const rootReducer = combineReducers({
  todos: todolistReducer,
});

export default rootReducer;

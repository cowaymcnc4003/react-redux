import { combineReducers } from "redux";
// import todoReducer from "./todoReducer";
// import todoReducer from "../ducks/todoDuck";
// redux toolkit 변경
// import todoReducer from "../actions/todoAction";
import todoReducer from '../slices/todoSlice';
import fetchTodosReducer from '../actions/fetchTodosAction';

const rootReducer = combineReducers({
  todo: todoReducer,
  fetchTodos: fetchTodosReducer,
});

export default rootReducer;
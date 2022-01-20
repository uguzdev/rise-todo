import { combineReducers, createStore } from "redux";
import { todoReducer } from "./todo";

const rootReducer = combineReducers({
  todos: todoReducer,
});

const store = createStore(rootReducer);

export default store;

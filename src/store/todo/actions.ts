import { ETodoTypes, ITodo } from "./types";

export const updateTodos = (payload: ITodo[]) => ({
  type: ETodoTypes.UPDATE_TODOS,
  payload,
});

export const addTodo = (payload: ITodo) => ({
  type: ETodoTypes.ADD_TODO,
  payload,
});

export const removeTodo = (payload: number) => ({
  type: ETodoTypes.REMOVE_TODO,
  payload,
});

export const updateTodo = (payload: ITodo) => ({
  type: ETodoTypes.UPDATE_TODO,
  payload,
});

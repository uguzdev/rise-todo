export interface ITodo {
  id: number;
  name: string;
  priority: number;
}

export interface IActionPayload<T> {
  type: string;
  payload: T;
}

export enum ETodoTypes {
  UPDATE_TODOS = "UPDATE_TODOS",
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  UPDATE_TODO = "UPDATE_TODO",
}

import { ETodoTypes, ITodo } from "./types";

const initialState: ITodo[] = [];

export const todoReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case ETodoTypes.UPDATE_TODOS:
      return payload;

    case ETodoTypes.ADD_TODO:
      return [...state, payload];

    case ETodoTypes.REMOVE_TODO:
      return state.filter((todo) => todo.id !== payload);

    case ETodoTypes.UPDATE_TODO:
      const index = state.findIndex((a) => a.id === payload.id);
      let newState = [...state];
      newState[index] = payload;
      return newState;

    default:
      return state;
  }
};

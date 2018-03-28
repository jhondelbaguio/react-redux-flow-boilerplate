import { createSelector } from "reselect";

// SELECTORS

export const todosSelector = state => state.todos.present.items;

export const alltodosSelector = createSelector(todosSelector, todosHash =>
	Object.values(todosHash)
);

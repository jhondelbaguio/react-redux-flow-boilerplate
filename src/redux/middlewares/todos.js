import {
	FETCH_TODOS_REQUEST,
	FETCH_TODOS_SUCCESS,
	FETCH_TODOS_ERROR,
	setTodos
} from "../actions/todos";

import { apiRequest } from "../actions/api";
import { todo } from "../lib/schema";

const getTodos = store => next => action => {
	next(action);

	if (action.type === FETCH_TODOS_REQUEST) {
		store.dispatch(
			apiRequest(
				"GET",
				`https://jsonplaceholder.typicode.com/todos`,
				null,
				FETCH_TODOS_SUCCESS,
				FETCH_TODOS_ERROR,
				[todo]
			)
		);
	}
};

const getTodosSuccess = store => next => action => {
	next(action);
	if (action.type === FETCH_TODOS_SUCCESS) {
		store.dispatch(setTodos(action.payload.entities.todos));
	}
};

export const todoMdl = [getTodos, getTodosSuccess];

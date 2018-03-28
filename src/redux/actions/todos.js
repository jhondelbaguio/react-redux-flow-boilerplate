// @flow
export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR";
export const SET_TODOS = "SET_TODOS";
export const UPDATE_TODO = "UPDATE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const fetchTodos = () => ({
	type: FETCH_TODOS_REQUEST
});

export const setTodos = todos => ({
	type: SET_TODOS,
	todos
});

export const changeTodoStatus = id => ({
	type: UPDATE_TODO,
	id
});

export const removeTodo = id => ({
	type: REMOVE_TODO,
	id
});

// @flow
import { combineReducers } from "redux";
import todosReducer from "./todos";
const reducersData = {
	todos: todosReducer
};

export type Reducers = typeof reducersData;
export const reducers = combineReducers(reducersData);

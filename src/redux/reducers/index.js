// @flow
import { combineReducers } from "redux";

const reducersData = {};

export type Reducers = typeof reducersData;
export const reducers = combineReducers(reducersData);

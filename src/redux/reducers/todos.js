import { SET_TODOS, UPDATE_TODO, REMOVE_TODO } from "../actions/todos";
import _ from "lodash";
import undoable from "redux-undo";

const initialState = {
	isFetching: true,
	items: {}
};

const todos = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_TODO:
			return {
				...state,
				items: {
					...state.items,
					[action.id]: {
						...state.items[action.id],
						completed: !state.items[action.id].completed
					}
				}
			};
			return state;
		case REMOVE_TODO:
			return { ...state, items: _.omit(state.items, action.id) };
		case SET_TODOS:
			return { ...state, items: { ...action.todos }, isFetching: false };
		default:
			return state;
	}
};

const undoableTodos = undoable(todos, {
	limit: 1 // set a limit for the history
});

export default undoableTodos;

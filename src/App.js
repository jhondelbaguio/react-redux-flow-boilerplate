// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import {
	fetchTodos,
	changeTodoStatus,
	removeTodo
} from "./redux/actions/todos";
import { alltodosSelector } from "./selectors/TodosSelector";
import TodosList from "./components/TodosList";
import UndoRedo from "./components/UndoRedo";

type Props = {};

class App extends Component<Props> {
	componentDidMount() {
		this.props.fetchTodos();
	}

	changeStatus = id => {
		this.props.changeTodoStatus(id);
	};

	removeTodo = id => {
		this.props.removeTodo(id);
	};

	render() {
		return (
			<div className="App">
				<UndoRedo />
				<table>
					<thead>
						<tr>
							<th>Todo Id</th>
							<th />
						</tr>
					</thead>
					<TodosList
						todos={this.props.todos}
						changeStatus={this.changeStatus}
						removeTodo={this.removeTodo}
					/>
				</table>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		todos: alltodosSelector(state)
	};
}

export default connect(mapStateToProps, {
	fetchTodos,
	changeTodoStatus,
	removeTodo
})(App);

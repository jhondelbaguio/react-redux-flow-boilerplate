import React from "react";

const TodosList = ({ todos, changeStatus, removeTodo }) => (
	<tbody>
		{todos.map(todo => (
			<tr key={todo.id}>
				<td>{todo.id}</td>
				<td>{todo.completed ? "Completed" : "In Progress"}</td>
				<td>
					<button onClick={() => changeStatus(todo.id)}>
						Change Status
					</button>
				</td>
				<td>
					<button onClick={() => removeTodo(todo.id)}>
						Remove Todo
					</button>
				</td>
			</tr>
		))}
	</tbody>
);

export default TodosList;

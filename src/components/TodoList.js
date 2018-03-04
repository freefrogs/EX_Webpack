import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

class TodoList extends React.Component {
	Remove(id) {
		this.props.OnDelete(id);
	}
	render() {
		let List;
		if (this.props.data) {
			List = this.props.data.map(data => {
				return (
					<Todo key={data.id} data={data} OnDelete={this.Remove.bind(this)}/>
				);
			});
		}
		return (
			<div className={style.TodoList}>
				<h2>My tasks:</h2>
				{List}
			</div>
		);
	}
}

export default TodoList;
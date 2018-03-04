import React from 'react';
import style from './Todo.css';


class Todo extends React.Component {
	Remove(id) {
		this.props.OnDelete(id);
	}
	render() {
		return (
			<div className={style.Todo}>
				<p>{this.props.data.text}</p>
				<a href='#' onClick={this.Remove.bind(this, this.props.data.id)}>Remove</a>
			</div>
		);
	}
}

export default Todo;
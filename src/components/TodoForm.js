import React from 'react';
import uuid from 'uuid';
import style from './TodoForm.css';


class TodoForm extends React.Component {
	constructor(){
		super();
		this.state = {
			newTodo: {}
		}
	}
	handleSubmit(e) {
		if(this.refs.todoText.value === '') {
			alert('Please define the task');
		} else {
			this.setState({
				newTodo: {
					text: this.refs.todoText.value,
					id: uuid.v4()
				}
			},
			function() {
				this.props.AddElement(this.state.newTodo);
				this.refs.todoText.value = '';
			});
		}
		e.preventDefault();
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)} className={style.TodoForm}>
				<input type='text' ref='todoText' />
				<input type='submit' value='Add task' />
			</form>
		);
	}
}

export default TodoForm;
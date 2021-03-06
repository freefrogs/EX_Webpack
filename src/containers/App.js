import React from 'react';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: [{
				text: 'buy ice cream',
				id: 1
			}, {
				text: 'eat ice cream',
				id: 2
			}, {
				text: 'hug my husband',
				id: 3
			}]
		};
	}
	addTodo(val){
		/*const todo = {
			text: val,
			id: uuid.v4()
		};*/
		const data = [...this.state.data, val];
		this.setState({data});
	}
	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		this.setState({data:remainder});
	}
	render() {
		return (
			<div className={style.TodoApp}>
				<Title data={this.state.data} />
				<TodoForm AddElement={this.addTodo.bind(this)} />
				<TodoList data={this.state.data} OnDelete={this.removeTodo.bind(this)} />
			</div>
		);
	}
}

export default App;
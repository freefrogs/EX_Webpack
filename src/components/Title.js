import React from 'react';

class Title extends React.Component {
	render() {
	let todoCount = this.props.data.length;
		return (
			<div>
				<h1>My To Do list</h1>
				<p>There is <span>{todoCount}</span> task on my list:</p>
			</div>
		);
	}
}

export default Title;
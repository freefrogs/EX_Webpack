import React from 'react';

class Title extends React.Component {
	render() {
	let todoCount = this.props.data.length;
		return (
			<div>
				<h1>To do list</h1>
				<p>There is {todoCount} todo task</p>
			</div>
		);
	}
}

export default Title;
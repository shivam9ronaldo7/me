import React from 'react'

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}
	
	componentDidMount() {
		this.timerID = setInterval(
		() => this.tick(),
		1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
		date: new Date()
		});
	}

	render() {
		return (
			<div>
				<h1>Every second counts....!!!</h1>
				<h2>Right now its....{this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
	
}

export default Clock;
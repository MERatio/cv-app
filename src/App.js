import React, { Component } from 'react';

import CV from './components/CV';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleInputChange(e) {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		this.setState({ [name]: value });
	}

	render() {
		return (
			<main>
				<div className="container my-4">
					<div className="row justify-content-center">
						<CV handleInputChange={this.handleInputChange} />
					</div>
				</div>
			</main>
		);
	}
}

export default App;

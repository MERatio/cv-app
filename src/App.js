import React, { Component } from 'react';

import CV from './components/CV';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<main>
				<div className="container my-4">
					<div className="row justify-content-center">
						<CV />
					</div>
				</div>
			</main>
		);
	}
}

export default App;

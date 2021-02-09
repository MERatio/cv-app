import React, { Component } from 'react';

import GeneralInfoForm from './GeneralInfoForm';

class GeneralInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editMode: false,
		};
		this.changeEditMode = this.changeEditMode.bind(this);
	}

	changeEditMode(editMode) {
		this.setState({ editMode });
	}

	render() {
		const { generalInfo, handleInputChange, handleSubmit } = this.props;
		const { editMode } = this.state;

		return editMode ? (
			<GeneralInfoForm
				generalInfo={generalInfo}
				changeEditMode={this.changeEditMode}
				handleInputChange={handleInputChange}
				handleSubmit={handleSubmit}
			/>
		) : (
			<section id="GeneralInfo">
				<address>
					<header>
						<h2 className="h1">{generalInfo.fullName}</h2>
					</header>
					<a
						href={`mailto:${generalInfo.email}`}
						className="d-inline-block mb-1"
					>
						{generalInfo.email}
					</a>
					<p>{generalInfo.phoneNumber}</p>
				</address>
				<button
					type="button"
					className="btn btn-warning edit-btn"
					id="editGeneralInfoBtn"
					onClick={() => this.changeEditMode(true)}
				>
					Edit
				</button>
			</section>
		);
	}
}

export default GeneralInfo;

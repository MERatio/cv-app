import React, { Component } from 'react';

class GeneralInfoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullName: this.props.generalInfo.fullName,
			email: this.props.generalInfo.email,
			phoneNumber: this.props.generalInfo.phoneNumber,
		};
		this.handleInputChange = this.props.handleInputChange.bind(this);
		this.handleCancelEdit = this.handleCancelEdit.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleCancelEdit() {
		this.props.changeEditMode('generalInfo', false);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state);
		this.props.changeEditMode('generalInfo', false);
	}

	render() {
		const { fullName, email, phoneNumber } = this.state;

		return (
			<form onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label htmlFor="fullName">Full Name</label>
					<input
						type="text"
						className="form-control"
						id="fullName"
						name="fullName"
						value={fullName}
						maxLength="255"
						required
						onChange={this.handleInputChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						className="form-control"
						id="email"
						name="email"
						value={email}
						maxLength="255"
						onChange={this.handleInputChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="phoneNumber">Phone Number</label>
					<input
						type="tel"
						className="form-control"
						id="phoneNumber"
						name="phoneNumber"
						value={phoneNumber}
						maxLength="20"
						onChange={this.handleInputChange}
						required
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Update
				</button>
				<button
					type="button"
					className="btn btn-secondary ml-2"
					onClick={this.handleCancelEdit}
				>
					Cancel
				</button>
			</form>
		);
	}
}

export default GeneralInfoForm;

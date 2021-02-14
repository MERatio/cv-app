import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import pluralize from 'pluralize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

class EducationsForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			educations: this.props.educations,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleEducationDelete = this.handleEducationDelete.bind(this);
		this.handleAddEducationInput = this.handleAddEducationInput.bind(this);
		this.handleCancelEdit = this.handleCancelEdit.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(educationId, e) {
		const target = e.target;
		const name = target.name;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const datePropNames = ['from', 'to', 'toPresent'];
		this.setState((state) => {
			return {
				educations: state.educations.map((education) => {
					if (education.id !== educationId) {
						return education;
					} else {
						if (datePropNames.includes(name)) {
							return {
								...education,
								date: { ...education.date, [name]: value },
							};
						} else {
							return { ...education, [name]: value };
						}
					}
				}),
			};
		});
	}

	handleEducationDelete(educationId) {
		this.setState((state) => {
			return {
				educations: state.educations.filter((education) => {
					return education.id !== educationId;
				}),
			};
		});
	}

	handleAddEducationInput() {
		this.setState((state) => {
			return {
				educations: state.educations.concat({
					id: nanoid(),
					school: '',
					title: '',
					date: {
						from: '',
						to: '',
						toPresent: false,
					},
				}),
			};
		});
	}

	handleCancelEdit() {
		this.props.changeEditMode('educations', false);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.educations);
		this.props.changeEditMode('educations', false);
	}

	render() {
		const { educations } = this.state;
		const isoDateNow = new Date().toISOString().split('T')[0];
		const educationInputs = educations.map((education) => {
			return (
				<div
					key={education.id}
					className="mb-2 p-4 border border-light rounded"
					id="educationInputs"
				>
					<button
						type="button"
						className="delete-btn cursor-pointer text-danger ml-2"
						id="deleteEducationBtn"
						onClick={() => this.handleEducationDelete(education.id)}
					>
						<FontAwesomeIcon
							icon={faTimesCircle}
							size="2x"
							className="pointer-events-none"
						/>
					</button>
					<div className="form-group">
						<label htmlFor={`${education.id}-school`}>School</label>
						<input
							type="text"
							className="form-control"
							id={`${education.id}-school`}
							name="school"
							value={education.school}
							maxLength="255"
							required
							pattern="^.*[\S].*$"
							onChange={(e) => this.handleInputChange(education.id, e)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor={`${education.id}-title`}>Title</label>
						<input
							type="text"
							className="form-control"
							id={`${education.id}-title`}
							name="title"
							value={education.title}
							maxLength="255"
							required
							pattern="^.*[\S].*$"
							onChange={(e) => this.handleInputChange(education.id, e)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor={`${education.id}-dateFrom`}>From:</label>
						<input
							type="date"
							className="form-control"
							id={`${education.id}-dateFrom`}
							name="from"
							value={education.date.from}
							required
							max={isoDateNow}
							onChange={(e) => this.handleInputChange(education.id, e)}
						/>
					</div>
					<div className="form-row mb-3">
						<div className="col-10">
							<label htmlFor={`${education.id}-dateTo`}>To:</label>
							<input
								type="date"
								className="form-control"
								id={`${education.id}-dateTo`}
								name="to"
								value={education.date.to}
								disabled={education.date.toPresent}
								required
								max={isoDateNow}
								onChange={(e) => this.handleInputChange(education.id, e)}
							/>
						</div>
						<div className="col-2 d-flex align-items-end">
							<div className="form-check mb-2">
								<input
									type="checkbox"
									className="form-check-input"
									id={`${education.id}-dateToPresent`}
									name="toPresent"
									checked={education.date.toPresent}
									onChange={(e) => this.handleInputChange(education.id, e)}
								/>
								<label
									className="form-check-label"
									htmlFor={`${education.id}-dateToPresent`}
								>
									Present?
								</label>
							</div>
						</div>
					</div>
				</div>
			);
		});

		return (
			<div>
				<header>
					<h2 className="dd-h2 mb-4">
						{pluralize('Education', educations.length)}
					</h2>
				</header>
				<form onSubmit={this.handleSubmit}>
					{educationInputs}
					<button
						type="button"
						className="btn btn-dark d-block mb-4"
						onClick={this.handleAddEducationInput}
					>
						Add new education
					</button>
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
			</div>
		);
	}
}

export default EducationsForm;

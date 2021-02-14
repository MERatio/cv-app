import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import pluralize from 'pluralize';

import XDeleteButton from './XDeleteButton';

class ExperiencesForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			experiences: this.props.experiences,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleExperienceDelete = this.handleExperienceDelete.bind(this);
		this.handleAddExperienceInput = this.handleAddExperienceInput.bind(this);
		this.handleAddMainTask = this.handleAddMainTask.bind(this);
		this.handleDeleteMainTask = this.handleDeleteMainTask.bind(this);
		this.handleCancelEdit = this.handleCancelEdit.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(experienceId, mainTaskId, e) {
		const target = e.target;
		const name = target.name;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const datePropNames = ['from', 'to', 'toPresent'];
		this.setState((state) => {
			return {
				experiences: state.experiences.map((experience) => {
					if (experience.id !== experienceId) {
						return experience;
					} else {
						if (datePropNames.includes(name)) {
							return {
								...experience,
								date: { ...experience.date, [name]: value },
							};
						} else if (mainTaskId) {
							return {
								...experience,
								mainTasks: experience.mainTasks.map((mainTask) => {
									if (mainTask.id !== mainTaskId) {
										return mainTask;
									} else {
										return { ...mainTask, [name]: value };
									}
								}),
							};
						} else {
							return { ...experience, [name]: value };
						}
					}
				}),
			};
		});
	}

	handleExperienceDelete(experienceId) {
		this.setState((state) => {
			return {
				experiences: state.experiences.filter((experience) => {
					return experience.id !== experienceId;
				}),
			};
		});
	}

	handleAddExperienceInput() {
		this.setState((state) => {
			return {
				experiences: state.experiences.concat({
					id: nanoid(),
					companyName: '',
					positionTitle: '',
					date: {
						from: '',
						to: '',
						toPresent: false,
					},
					mainTasks: [{ id: nanoid(), description: '' }],
				}),
			};
		});
	}

	handleAddMainTask(experienceId) {
		this.setState((state) => {
			return {
				experiences: state.experiences.map((experience) => {
					if (experience.id !== experienceId) {
						return experience;
					} else {
						return {
							...experience,
							mainTasks: experience.mainTasks.concat({
								id: nanoid(),
								description: '',
							}),
						};
					}
				}),
			};
		});
	}

	handleDeleteMainTask(experienceId, mainTaskId) {
		this.setState((state) => {
			return {
				experiences: state.experiences.map((experience) => {
					if (experience.id !== experienceId) {
						return experience;
					} else {
						return {
							...experience,
							mainTasks: experience.mainTasks.filter((mainTask) => {
								return mainTask.id !== mainTaskId;
							}),
						};
					}
				}),
			};
		});
	}

	handleCancelEdit() {
		this.props.changeEditMode('experiences', false);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.experiences);
		this.props.changeEditMode('experiences', false);
	}

	render() {
		const { experiences } = this.state;
		const isoDateNow = new Date().toISOString().split('T')[0];
		const experienceInputs = experiences.map((experience) => {
			const mainTasksInputs = experience.mainTasks.map((mainTask, index) => {
				return (
					<div className="form-row mb-3" key={mainTask.id}>
						<div className="col-11">
							<label htmlFor={`${mainTask.id}-mainTaskDescription`}>
								{`Main Task #${index + 1}`}
							</label>
							<input
								type="text"
								className="form-control"
								id={`${mainTask.id}-mainTaskDescription`}
								name="description"
								value={mainTask.description}
								maxLength="255"
								required
								pattern="^.*[\S].*$"
								onChange={(e) => {
									return this.handleInputChange(experience.id, mainTask.id, e);
								}}
							/>
						</div>
						<div className="col-1 d-flex align-items-end">
							<XDeleteButton
								onClickProp={() =>
									this.handleDeleteMainTask(experience.id, mainTask.id)
								}
							/>
						</div>
					</div>
				);
			});
			return (
				<div
					key={experience.id}
					className="mb-2 p-4 border border-light rounded"
					id="experienceInputs"
				>
					<XDeleteButton
						classesProp={'absTopRight'}
						onClickProp={() => this.handleExperienceDelete(experience.id)}
					/>
					<div className="form-group">
						<label htmlFor={`${experience.id}-companyName`}>Company Name</label>
						<input
							type="text"
							className="form-control"
							id={`${experience.id}-companyName`}
							name="companyName"
							value={experience.companyName}
							placeholder="Acme Corporation"
							maxLength="255"
							required
							pattern="^.*[\S].*$"
							onChange={(e) => {
								return this.handleInputChange(experience.id, undefined, e);
							}}
						/>
					</div>
					<div className="form-group">
						<label htmlFor={`${experience.id}-positionTitle`}>
							Position Title
						</label>
						<input
							type="text"
							className="form-control"
							id={`${experience.id}-positionTitle`}
							name="positionTitle"
							value={experience.positionTitle}
							placeholder="Web Developer"
							maxLength="255"
							required
							pattern="^.*[\S].*$"
							onChange={(e) => {
								return this.handleInputChange(experience.id, undefined, e);
							}}
						/>
					</div>
					<div className="form-group">
						<label htmlFor={`${experience.id}-dateFrom`}>From:</label>
						<input
							type="date"
							className="form-control"
							id={`${experience.id}-dateFrom`}
							name="from"
							value={experience.date.from}
							required
							max={isoDateNow}
							onChange={(e) => {
								return this.handleInputChange(experience.id, undefined, e);
							}}
						/>
					</div>
					<div className="form-row mb-3">
						<div className="col-10">
							<label htmlFor={`${experience.id}-dateTo`}>To:</label>
							<input
								type="date"
								className="form-control"
								id={`${experience.id}-dateTo`}
								name="to"
								value={experience.date.to}
								disabled={experience.date.toPresent}
								required
								max={isoDateNow}
								onChange={(e) => {
									return this.handleInputChange(experience.id, undefined, e);
								}}
							/>
						</div>
						<div className="col-2 d-flex align-items-end">
							<div className="form-check mb-2">
								<input
									type="checkbox"
									className="form-check-input"
									id={`${experience.id}-dateToPresent`}
									name="toPresent"
									checked={experience.date.toPresent}
									onChange={(e) => {
										return this.handleInputChange(experience.id, undefined, e);
									}}
								/>
								<label
									className="form-check-label"
									htmlFor={`${experience.id}-dateToPresent`}
								>
									Present?
								</label>
							</div>
						</div>
					</div>
					{mainTasksInputs}
					<button
						type="button"
						className="btn btn-dark"
						onClick={() => this.handleAddMainTask(experience.id)}
					>
						Add new main task
					</button>
				</div>
			);
		});

		return (
			<div>
				<header>
					<h2 className="dd-h2">
						{pluralize('Experience', experiences.length)}
					</h2>
				</header>
				<form onSubmit={this.handleSubmit}>
					{experienceInputs}
					<button
						type="button"
						className="btn btn-dark d-block mb-4"
						onClick={this.handleAddExperienceInput}
					>
						Add new experience
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

export default ExperiencesForm;

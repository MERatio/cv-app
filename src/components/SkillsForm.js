import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import pluralize from 'pluralize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

class GeneralInfoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			skills: this.props.skills,
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSkillDelete = this.handleSkillDelete.bind(this);
		this.handleAddSkillInput = this.handleAddSkillInput.bind(this);
		this.handleCancelEdit = this.handleCancelEdit.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(skillId, e) {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		this.setState((state) => {
			return {
				skills: state.skills.map((skill) => {
					if (skill.id !== skillId) {
						return skill;
					} else {
						return { ...skill, [name]: value };
					}
				}),
			};
		});
	}

	handleSkillDelete(skillId) {
		this.setState((state) => {
			return {
				skills: state.skills.filter((skill) => {
					return skill.id !== skillId;
				}),
			};
		});
	}

	handleAddSkillInput() {
		this.setState((state) => {
			return {
				skills: state.skills.concat({ id: nanoid(), name: '' }),
			};
		});
	}

	handleCancelEdit() {
		this.props.changeEditMode('skills', false);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.skills);
		this.props.changeEditMode('skills', false);
	}

	render() {
		const { skills } = this.state;
		const skillInputs = skills.map((skill, index) => {
			return (
				<div className="form-group d-flex align-items-center" key={skill.id}>
					<input
						type="text"
						className="form-control"
						name="name"
						value={skill.name}
						placeholder="Add your skill"
						maxLength="255"
						required
						pattern="^.*[\S].*$"
						onChange={(e) => this.handleInputChange(skill.id, e)}
					/>
					<button
						type="button"
						className="delete-btn cursor-pointer text-danger ml-2"
						onClick={() => this.handleSkillDelete(skill.id)}
					>
						<FontAwesomeIcon
							icon={faTimesCircle}
							size="2x"
							className="pointer-events-none"
						/>
					</button>
				</div>
			);
		});

		return (
			<div>
				<header>
					<h2 className="dd-h2 mb-4">{pluralize('Skill', skills.length)}</h2>
				</header>
				<form onSubmit={this.handleSubmit}>
					{skillInputs}
					<button
						className="btn btn-dark d-block mb-4"
						onClick={this.handleAddSkillInput}
					>
						Add new skill
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

export default GeneralInfoForm;

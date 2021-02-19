import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import pluralize from 'pluralize';

import XDeleteButton from './XDeleteButton';

function GeneralInfoForm(props) {
	const [skills, setSkills] = useState(props.skills);

	function handleInputChange(skillId, e) {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		setSkills(
			skills.map((skill) => {
				if (skill.id !== skillId) {
					return skill;
				} else {
					return { ...skill, [name]: value };
				}
			})
		);
	}

	function handleSkillDelete(skillId) {
		setSkills(skills.filter((skill) => skill.id !== skillId));
	}

	function handleAddSkillInput() {
		setSkills(skills.concat({ id: nanoid(), name: '' }));
	}

	function handleCancelEdit() {
		props.changeEditMode('skills', false);
	}

	function handleSubmit(e) {
		e.preventDefault();
		props.onSubmit(skills);
		props.changeEditMode('skills', false);
	}

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
					onChange={(e) => handleInputChange(skill.id, e)}
				/>
				<XDeleteButton
					classesProp={'ml-2'}
					onClickProp={() => handleSkillDelete(skill.id)}
				/>
			</div>
		);
	});

	return (
		<div>
			<header>
				<h2 className="dd-h2 mb-4">{pluralize('Skill', skills.length)}</h2>
			</header>
			<form onSubmit={handleSubmit}>
				{skillInputs}
				<button
					className="btn btn-dark d-block mb-4"
					onClick={handleAddSkillInput}
				>
					Add new skill
				</button>
				<button type="submit" className="btn btn-primary">
					Update
				</button>
				<button
					type="button"
					className="btn btn-secondary ml-2"
					onClick={handleCancelEdit}
				>
					Cancel
				</button>
			</form>
		</div>
	);
}

export default GeneralInfoForm;

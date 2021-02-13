import pluralize from 'pluralize';

function Skills(props) {
	const { skills, changeEditMode } = props;
	const skillsListItems = skills.map((skill) => {
		return (
			<li key={skill.id} className="skills-list-item">
				{skill.name}
			</li>
		);
	});

	return (
		<section>
			<header>
				<h2 className="dd-h2 mb-4">{pluralize('Skill', skills.length)}</h2>
			</header>
			<ul className="skills-list">{skillsListItems}</ul>
			<button
				type="button"
				className="btn btn-warning edit-btn"
				onClick={() => changeEditMode('skills', true)}
			>
				Edit
			</button>
		</section>
	);
}

export default Skills;

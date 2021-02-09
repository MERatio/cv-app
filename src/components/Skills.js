function Skills(props) {
	const { skills } = props;
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
				<h2 className="dd-h2">Skills</h2>
			</header>
			<ul className="skills-list">{skillsListItems}</ul>
		</section>
	);
}

export default Skills;

import pluralize from 'pluralize';

function Experiences(props) {
	const { experiences, changeEditMode } = props;
	const experiencesListItems = experiences.map((experience) => {
		return (
			<li key={experience.id} className="dd-li">
				<p className="mb-1">
					<span className="font-weight-bold">{experience.companyName}</span> -{' '}
					<span className="dd-user-title">{experience.positionTitle}</span>
				</p>
				<p className="from-to-date">
					<span>{experience.date.from}</span> -{' '}
					<span>
						{experience.date.toPresent ? 'Present' : experience.date.to}
					</span>
				</p>
				<ul>
					{experience.mainTasks.map((mainTask) => {
						return <li key={mainTask.id}>{mainTask.description}</li>;
					})}
				</ul>
			</li>
		);
	});

	return (
		<section>
			<header>
				<h2 className="dd-h2">{pluralize('Experience', experiences.length)}</h2>
			</header>
			<ul className="dd-ul">{experiencesListItems}</ul>
			<button
				type="button"
				className="btn btn-warning edit-btn"
				onClick={() => changeEditMode('experiences', true)}
			>
				Edit
			</button>
		</section>
	);
}

export default Experiences;

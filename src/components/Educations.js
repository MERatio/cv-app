import pluralize from 'pluralize';

function Educations(props) {
	const { educations, changeEditMode, formatDateForDisplay } = props;
	const educationsListItems = educations.map((education) => {
		return (
			<li key={education.id} className="dd-li">
				<p className="mb-1">
					<span className="font-weight-bold">{education.school}</span> -{' '}
					<span className="dd-user-title">{education.title}</span>
				</p>

				<p className="from-to-date">
					<span>{formatDateForDisplay(education.date.from)}</span> -{' '}
					<span>
						{education.date.toPresent
							? 'Present'
							: formatDateForDisplay(education.date.to)}
					</span>
				</p>
			</li>
		);
	});

	return (
		<section>
			<header>
				<h2 className="dd-h2">{pluralize('Education', educations.length)}</h2>
			</header>
			<ul className="dd-ul">{educationsListItems}</ul>
			<button
				type="button"
				className="btn btn-warning edit-btn"
				onClick={() => changeEditMode('educations', true)}
			>
				Edit
			</button>
		</section>
	);
}

export default Educations;

function GeneralInfo(props) {
	const { generalInfo, changeEditMode } = props;

	return (
		<section id="GeneralInfo">
			<address>
				<header>
					<h2 className="h1">{generalInfo.fullName}</h2>
				</header>
				<a href={`mailto:${generalInfo.email}`} className="d-inline-block mb-1">
					{generalInfo.email}
				</a>
				<p>{generalInfo.phoneNumber}</p>
			</address>
			<button
				type="button"
				className="btn btn-warning edit-btn"
				id="editGeneralInfoBtn"
				onClick={() => changeEditMode('generalInfo', true)}
			>
				Edit
			</button>
		</section>
	);
}

export default GeneralInfo;

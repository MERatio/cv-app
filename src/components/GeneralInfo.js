function GeneralInfo(props) {
	const { generalInfo } = props;

	return (
		<section>
			<address>
				<header>
					<h2 className="h1">{generalInfo.fullName}</h2>
				</header>
				<a href={`mailto:${generalInfo.email}`} className="d-inline-block mb-1">
					{generalInfo.email}
				</a>
				<p>{generalInfo.phoneNumber}</p>
			</address>
		</section>
	);
}

export default GeneralInfo;

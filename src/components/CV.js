import '../styles/CV.css';

import GeneralInfo from './GeneralInfo';
import Skills from './Skills';
import Experiences from './Experiences';
import Educations from './Educations';

function CV(props) {
	const {
		generalInfo,
		skills,
		experiences,
		educations,
		handleInputChange,
		handleGeneralInfoUpdate,
	} = props;

	return (
		<article id="CV" className="col-md-8 p-5 bg-white box-shadow">
			<GeneralInfo
				generalInfo={generalInfo}
				handleInputChange={handleInputChange}
				handleSubmit={handleGeneralInfoUpdate}
			/>
			<hr />
			<Skills skills={skills} />
			<hr />
			<Experiences experiences={experiences} />
			<hr />
			<Educations educations={educations} />
		</article>
	);
}

export default CV;

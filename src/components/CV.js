import '../styles/CV.css';

import GeneralInfo from './GeneralInfo';
import Skills from './Skills';
import Experiences from './Experiences';
import Educations from './Educations';

function CV(props) {
	const { generalInfo, skills, experiences, educations } = props;

	return (
		<article className="container my-4">
			<div className="row justify-content-center">
				<div className="col-md-8 p-5 bg-white box-shadow">
					<GeneralInfo generalInfo={generalInfo} />
					<hr />
					<Skills skills={skills} />
					<hr />
					<Experiences experiences={experiences} />
					<hr />
					<Educations educations={educations} />
				</div>
			</div>
		</article>
	);
}

export default CV;

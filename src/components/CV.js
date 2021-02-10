import React, { Component } from 'react';
import '../styles/CV.css';

import GeneralInfo from './GeneralInfo';
import GeneralInfoForm from './GeneralInfoForm';
import Skills from './Skills';
import Experiences from './Experiences';
import Educations from './Educations';

class CV extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editModes: {
				generalInfo: false,
			},
		};
		this.changeEditMode = this.changeEditMode.bind(this);
	}

	changeEditMode(section, editMode) {
		this.setState((state) => {
			return {
				editModes: {
					...state.editModes,
					[section]: editMode,
				},
			};
		});
	}

	render() {
		const {
			generalInfo,
			skills,
			experiences,
			educations,
			handleInputChange,
			handleGeneralInfoUpdate,
		} = this.props;
		const { editModes } = this.state;

		return (
			<article id="CV" className="col-md-8 p-5 bg-white box-shadow">
				{editModes.generalInfo ? (
					<GeneralInfoForm
						generalInfo={generalInfo}
						changeEditMode={this.changeEditMode}
						handleInputChange={handleInputChange}
						handleSubmit={handleGeneralInfoUpdate}
					/>
				) : (
					<GeneralInfo
						generalInfo={generalInfo}
						changeEditMode={this.changeEditMode}
					/>
				)}
				<hr />
				<Skills skills={skills} />
				<hr />
				<Experiences experiences={experiences} />
				<hr />
				<Educations educations={educations} />
			</article>
		);
	}
}

export default CV;

import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import '../styles/CV.css';

import GeneralInfo from './GeneralInfo';
import GeneralInfoForm from './GeneralInfoForm';
import Skills from './Skills';
import SkillsForm from './SkillsForm';
import Experiences from './Experiences';
import Educations from './Educations';

class CV extends Component {
	constructor(props) {
		super(props);
		this.state = {
			generalInfo: {
				fullName: 'Mark Edward Ratio',
				email: 'markedwardratio@gmail.com',
				phoneNumber: '092929xxxxx',
			},
			skills: [
				{ id: nanoid(), name: 'HTML' },
				{ id: nanoid(), name: 'CSS' },
				{ id: nanoid(), name: 'JavaScript' },
				{ id: nanoid(), name: 'React' },
				{ id: nanoid(), name: 'Node.js' },
				{ id: nanoid(), name: 'Express.js' },
				{ id: nanoid(), name: 'Ruby' },
				{ id: nanoid(), name: 'Ruby on Rails' },
				{ id: nanoid(), name: 'Sass' },
				{ id: nanoid(), name: 'Bootstrap' },
				{ id: nanoid(), name: 'Git' },
				{ id: nanoid(), name: 'Jest' },
			],
			experiences: [
				{
					id: nanoid(),
					companyName: 'NAPOLCOM, Quezon City',
					positionTitle: 'IT Officer (OJT)',
					date: {
						from: '2018-11-01',
						to: '2019-03-01',
					},
					mainTasks: [
						{
							id: nanoid(),
							description:
								'Diagnose and troubleshoot software, hardware and network related problems',
						},
						{
							id: nanoid(),
							description:
								'Handle calls from the employee about their technical problems',
						},
					],
				},
			],
			educations: [
				{
					id: nanoid(),
					school: 'STI Novaliches',
					title: 'Bachelor of Science in Information Technology',
					date: {
						from: '2015-06-01',
						to: '2019-04-01',
					},
				},
			],
			editModes: {
				generalInfo: false,
				skills: false,
			},
		};
		this.changeEditMode = this.changeEditMode.bind(this);
		this.handleGeneralInfoUpdate = this.handleGeneralInfoUpdate.bind(this);
		this.handleSkillsUpdate = this.handleSkillsUpdate.bind(this);
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

	handleGeneralInfoUpdate(newGeneralInfo) {
		const { fullName, email, phoneNumber } = newGeneralInfo;
		this.setState({
			generalInfo: {
				fullName,
				email,
				phoneNumber,
			},
		});
	}

	handleSkillsUpdate(newSkills) {
		this.setState({ skills: newSkills });
	}

	render() {
		const { handleInputChange } = this.props;

		const {
			generalInfo,
			skills,
			experiences,
			educations,
			editModes,
		} = this.state;

		return (
			<article id="CV" className="col-md-8 p-5 bg-white box-shadow">
				{editModes.generalInfo ? (
					<GeneralInfoForm
						handleInputChange={handleInputChange}
						generalInfo={generalInfo}
						changeEditMode={this.changeEditMode}
						handleSubmit={this.handleGeneralInfoUpdate}
					/>
				) : (
					<GeneralInfo
						generalInfo={generalInfo}
						changeEditMode={this.changeEditMode}
					/>
				)}
				<hr />
				{editModes.skills ? (
					<SkillsForm
						skills={skills}
						changeEditMode={this.changeEditMode}
						onSubmit={this.handleSkillsUpdate}
					/>
				) : (
					<Skills skills={skills} changeEditMode={this.changeEditMode} />
				)}
				<hr />
				<Experiences experiences={experiences} />
				<hr />
				<Educations educations={educations} />
			</article>
		);
	}
}

export default CV;

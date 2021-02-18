import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { format, formatISO } from 'date-fns';
import '../styles/CV.css';

import GeneralInfo from './GeneralInfo';
import GeneralInfoForm from './GeneralInfoForm';
import Skills from './Skills';
import SkillsForm from './SkillsForm';
import Experiences from './Experiences';
import ExperiencesForm from './ExperiencesForm';
import Educations from './Educations';
import EducationsForm from './EducationsForm';

const CV = (props) => {
	const [generalInfo, setGeneralInfo] = useState({
		fullName: 'Mark Edward Ratio',
		email: 'markedwardratio@gmail.com',
		phoneNumber: '092929xxxxx',
	});

	const [skills, setSkills] = useState([
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
	]);

	const [experiences, setExperiences] = useState([
		{
			id: nanoid(),
			companyName: 'NAPOLCOM, Quezon City',
			positionTitle: 'IT Officer (OJT)',
			date: {
				from: new Date('2018-11-01'),
				to: new Date('2019-03-01'),
				toPresent: false,
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
	]);

	const [educations, setEducations] = useState([
		{
			id: nanoid(),
			school: 'STI Novaliches',
			title: 'Bachelor of Science in Information Technology',
			date: {
				from: new Date('2015-06-01'),
				to: new Date('2019-04-01'),
				toPresent: false,
			},
		},
	]);

	const [editModes, setEditModes] = useState({
		generalInfo: false,
		skills: false,
		experiences: false,
		educations: false,
	});

	const changeEditMode = (section, editMode) => {
		setEditModes({ ...editModes, [section]: editMode });
	};

	const handleGeneralInfoUpdate = (newGeneralInfo) => {
		const { fullName, email, phoneNumber } = newGeneralInfo;
		setGeneralInfo({ fullName, email, phoneNumber });
	};

	const handleSkillsUpdate = (newSkills) => {
		setSkills(newSkills);
	};

	const handleExperiencesUpdate = (newExperiences) => {
		setExperiences(newExperiences);
	};

	const handleEducationsUpdate = (newEducations) => {
		setEducations(newEducations);
	};

	const formatDateForDisplay = (date) => {
		return format(date, 'MMMM d, yyyy');
	};

	const formatDateForForm = (date) => {
		try {
			return !date ? '' : formatISO(date, { representation: 'date' });
		} catch (err) {
			return '';
		}
	};

	return (
		<article id="CV" className="col-md-8 p-5 bg-white box-shadow">
			{editModes.generalInfo ? (
				<GeneralInfoForm
					generalInfo={generalInfo}
					changeEditMode={changeEditMode}
					onSubmit={handleGeneralInfoUpdate}
				/>
			) : (
				<GeneralInfo
					generalInfo={generalInfo}
					changeEditMode={changeEditMode}
				/>
			)}
			<hr />
			{editModes.skills ? (
				<SkillsForm
					skills={skills}
					changeEditMode={changeEditMode}
					onSubmit={handleSkillsUpdate}
				/>
			) : (
				<Skills skills={skills} changeEditMode={changeEditMode} />
			)}
			<hr />
			{editModes.experiences ? (
				<ExperiencesForm
					experiences={experiences}
					changeEditMode={changeEditMode}
					onSubmit={handleExperiencesUpdate}
					formatDateForForm={formatDateForForm}
				/>
			) : (
				<Experiences
					experiences={experiences}
					changeEditMode={changeEditMode}
					formatDateForDisplay={formatDateForDisplay}
				/>
			)}
			<hr />
			{editModes.educations ? (
				<EducationsForm
					educations={educations}
					changeEditMode={changeEditMode}
					onSubmit={handleEducationsUpdate}
					formatDateForForm={formatDateForForm}
				/>
			) : (
				<Educations
					educations={educations}
					changeEditMode={changeEditMode}
					formatDateForDisplay={formatDateForDisplay}
				/>
			)}
		</article>
	);
};

export default CV;

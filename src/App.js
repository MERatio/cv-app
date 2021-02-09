import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import CV from './components/CV';

class App extends Component {
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
		};
		this.handleGeneralInfoUpdate = this.handleGeneralInfoUpdate.bind(this);
	}

	handleInputChange(e) {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		this.setState({ [name]: value });
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

	render() {
		const { generalInfo, skills, experiences, educations } = this.state;

		return (
			<main>
				<CV
					generalInfo={generalInfo}
					skills={skills}
					experiences={experiences}
					educations={educations}
					handleInputChange={this.handleInputChange}
					handleGeneralInfoUpdate={this.handleGeneralInfoUpdate}
				/>
			</main>
		);
	}
}

export default App;

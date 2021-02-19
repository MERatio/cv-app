import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import pluralize from 'pluralize';

import XDeleteButton from './XDeleteButton';

function EducationsForm(props) {
	const [educations, setEducations] = useState(props.educations);

	function handleInputChange(educationId, e) {
		const target = e.target;
		const name = target.name;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const datePropNames = ['from', 'to', 'toPresent'];
		setEducations(
			educations.map((education) => {
				if (education.id !== educationId) {
					return education;
				} else {
					if (datePropNames.includes(name)) {
						return {
							...education,
							date: {
								...education.date,
								[name]: name === 'toPresent' ? value : new Date(value),
							},
						};
					} else {
						return { ...education, [name]: value };
					}
				}
			})
		);
	}

	function handleEducationDelete(educationId) {
		setEducations(
			educations.filter((education) => {
				return education.id !== educationId;
			})
		);
	}

	function handleAddEducationInput() {
		setEducations(
			educations.concat({
				id: nanoid(),
				school: '',
				title: '',
				date: {
					from: '',
					to: '',
					toPresent: false,
				},
			})
		);
	}

	function handleCancelEdit() {
		props.changeEditMode('educations', false);
	}

	function handleSubmit(e) {
		e.preventDefault();
		props.onSubmit(
			educations.map((education) => {
				return {
					...education,
					date: {
						...education.date,
						to: education.date.toPresent ? undefined : education.date.to,
					},
				};
			})
		);
		props.changeEditMode('educations', false);
	}

	const { formatDateForForm } = props;
	const isoDateNow = new Date().toISOString().split('T')[0];
	const educationInputs = educations.map((education) => {
		return (
			<div
				key={education.id}
				className="mb-2 p-4 border border-light rounded"
				id="educationInputs"
			>
				<XDeleteButton
					classesProp={'absTopRight'}
					onClickProp={() => handleEducationDelete(education.id)}
				/>
				<div className="form-group">
					<label htmlFor={`${education.id}-school`}>School</label>
					<input
						type="text"
						className="form-control"
						id={`${education.id}-school`}
						name="school"
						value={education.school}
						maxLength="255"
						required
						pattern="^.*[\S].*$"
						onChange={(e) => handleInputChange(education.id, e)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor={`${education.id}-title`}>Title</label>
					<input
						type="text"
						className="form-control"
						id={`${education.id}-title`}
						name="title"
						value={education.title}
						maxLength="255"
						required
						pattern="^.*[\S].*$"
						onChange={(e) => handleInputChange(education.id, e)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor={`${education.id}-dateFrom`}>From:</label>
					<input
						type="date"
						className="form-control"
						id={`${education.id}-dateFrom`}
						name="from"
						value={formatDateForForm(education.date.from)}
						required
						max={isoDateNow}
						onChange={(e) => handleInputChange(education.id, e)}
					/>
				</div>
				<div className="form-row mb-3">
					<div className="col-10">
						<label htmlFor={`${education.id}-dateTo`}>To:</label>
						<input
							type="date"
							className="form-control"
							id={`${education.id}-dateTo`}
							name="to"
							value={formatDateForForm(education.date.to)}
							disabled={education.date.toPresent}
							required
							max={isoDateNow}
							onChange={(e) => handleInputChange(education.id, e)}
						/>
					</div>
					<div className="col-2 d-flex align-items-end">
						<div className="form-check mb-2">
							<input
								type="checkbox"
								className="form-check-input"
								id={`${education.id}-dateToPresent`}
								name="toPresent"
								checked={education.date.toPresent}
								onChange={(e) => handleInputChange(education.id, e)}
							/>
							<label
								className="form-check-label"
								htmlFor={`${education.id}-dateToPresent`}
							>
								Present?
							</label>
						</div>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div>
			<header>
				<h2 className="dd-h2">{pluralize('Education', educations.length)}</h2>
			</header>
			<form onSubmit={handleSubmit}>
				{educationInputs}
				<button
					type="button"
					className="btn btn-dark d-block mb-4"
					onClick={handleAddEducationInput}
				>
					Add new education
				</button>
				<button type="submit" className="btn btn-primary">
					Update
				</button>
				<button
					type="button"
					className="btn btn-secondary ml-2"
					onClick={handleCancelEdit}
				>
					Cancel
				</button>
			</form>
		</div>
	);
}

export default EducationsForm;

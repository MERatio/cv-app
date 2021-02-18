import React, { useState } from 'react';

const GeneralInfoForm = (props) => {
	const [inputs, setInputs] = useState(props.generalInfo);

	const handleInputChange = (e) => {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		setInputs({ ...inputs, [name]: value });
	};

	const handleCancelEdit = () => {
		props.changeEditMode('generalInfo', false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.onSubmit(inputs);
		props.changeEditMode('generalInfo', false);
	};

	const { fullName, email, phoneNumber } = inputs;

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="fullName">Full Name</label>
				<input
					type="text"
					className="form-control"
					id="fullName"
					name="fullName"
					value={fullName}
					maxLength="255"
					required
					pattern="^.*[\S].*$"
					onChange={handleInputChange}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="email">Email</label>
				<input
					type="email"
					className="form-control"
					id="email"
					name="email"
					value={email}
					maxLength="255"
					onChange={handleInputChange}
					required
				/>
			</div>
			<div className="form-group">
				<label htmlFor="phoneNumber">Phone Number</label>
				<input
					type="tel"
					className="form-control"
					id="phoneNumber"
					name="phoneNumber"
					value={phoneNumber}
					maxLength="20"
					onChange={handleInputChange}
					required
					pattern="^.*[\S].*$"
				/>
			</div>
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
	);
};

export default GeneralInfoForm;

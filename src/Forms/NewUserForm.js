import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './Form.css';

function NewUserForm({ signup }) {
	const INITIAL_STATE = {
		username: '',
		password: '',
		firstName: '',
		lastName: '',
		email: ''
	};
	const [ formData, setFormData ] = useState(INITIAL_STATE);
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();
		// send a post request to api and add form
		let result = await signup(formData);
		console.log(result);
		history.push(`/home`);
	}
	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		//, id: formData.name.toLowerCase()
	}
	return (
		<div className="Form">
			<h3 className="mb-3 mt-3">Sign In</h3>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Label htmlFor="username">Username:</Label>

					<Input
						id="username"
						type="text"
						name="username"
						placeholder="Username"
						value={formData.username}
						onChange={handleChange}
						required
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="password">Password:</Label>

					<Input
						id="password"
						type="text"
						name="password"
						placeholder="password"
						value={formData.password}
						onChange={handleChange}
						required
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="name">First Name:</Label>

					<Input
						id="firstName"
						type="text"
						name="firstName"
						placeholder="John Smith"
						value={formData.firstName}
						onChange={handleChange}
						required
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="lastName">Last Name:</Label>

					<Input
						id="usernalastNameme"
						type="text"
						name="lastName"
						placeholder="Last Name"
						value={formData.lastName}
						onChange={handleChange}
						required
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="name">Email:</Label>

					<Input
						id="email"
						type="email"
						name="email"
						placeholder="Email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</FormGroup>
				<Button variant="outlined" onClick={handleSubmit} type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default NewUserForm;

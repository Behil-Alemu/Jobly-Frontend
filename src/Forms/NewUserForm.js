import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewUserForm({signup}) {
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
		console.log(result)
		history.push(`/home`);
	}
	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		//, id: formData.name.toLowerCase()
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">Username:</label>

					<input
						id="username"
						type="text"
						name="username"
						placeholder="Username"
						value={formData.username}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="password">Password:</label>

					<input
						id="password"
						type="text"
						name="password"
						placeholder="password"
						value={formData.password}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="name">First Name:</label>

					<input
						id="firstName"
						type="text"
						name="firstName"
						placeholder="John Smith"
						value={formData.firstName}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="lastName">Last Name:</label>

					<input
						id="usernalastNameme"
						type="text"
						name="lastName"
						placeholder="Last Name"
						value={formData.lastName}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="name">Email:</label>

					<input
						id="email"
						type="email"
						name="email"
						placeholder="Email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>
                <button onClick={handleSubmit}>Submit</button>
			</form>
		</div>
	);
}

export default NewUserForm;

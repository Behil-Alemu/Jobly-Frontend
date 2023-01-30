import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginForm({ login }) {
	const history = useHistory();
	const INITIAL_STATE = {
		username: '',
		password: ''
	};
	const [ formData, setFormData ] = useState(INITIAL_STATE);

	async function handleSubmit(evt) {
		evt.preventDefault();
		let result = await login(formData);
		history.push('/companies');
	}

	/** Update form data field */
	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value});
	}

	return (
		<div>
			<h3>Log In</h3>
			<div>
				<form onSubmit={handleSubmit}>
					<div>
						<label>Username</label>
						<input
							id="username"
							name="username"
							value={formData.username}
							onChange={handleChange}
							autoComplete="username"
							required
						/>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input
							type="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							required
						/>
					</div>

					<button onSubmit={handleSubmit}>Submit</button>
				</form>
			</div>
		</div>
	);
}

export default LoginForm;

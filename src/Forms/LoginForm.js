import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Link } from '@mui/material';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './Form.css';

function LoginForm({ login }) {
	const history = useHistory();
	const INITIAL_STATE = {
		username: '',
		password: ''
	};
	const [ formData, setFormData ] = useState(INITIAL_STATE);

	// console.debug(
	// 	"LoginForm",
	// 	"login=", typeof login,
	// 	"formData=", formData,
	// );

	async function handleSubmit(evt) {
		evt.preventDefault();
		let result = await login(formData);
		console.log(result);
		history.push('/companies');
	}

	/** Update form data field */
	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	return (
		<div className="Form">
				<h3 className="mb-3 mt-3">Log In</h3>
				<div>
					<Form onSubmit={handleSubmit}>
						<FormGroup row>
							<Label htmlFor="username">Username:</Label>

							<Input
								id="username"
								name="username"
								className="form-control"
								value={formData.username}
								onChange={handleChange}
								autoComplete="username"
								required
							/>
						</FormGroup>
						<FormGroup row>
							<Label htmlFor="password">Password:</Label>

							<Input
								type="password"
								name="password"
								className="form-control"
								value={formData.password}
								onChange={handleChange}
								autoComplete="current-password"

								required
							/>
						</FormGroup>

						<Button onSubmit={handleSubmit} size="small" variant="outlined" type="submit">
							Submit
						</Button>
					</Form>
					<Grid item>
						<Link href="/signup" variant="body2">
							{"Don't have an account? Sign Up"}
						</Link>
					</Grid>
				</div>
			</div>
	);
}

export default LoginForm;

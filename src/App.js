import React, { useState, useEffect } from 'react';
import './App.css';
import JoblyApi from '../src/api';
import Routes from '../src/Routes/Routes';
import LoadingSpinner from './helpers/LoadingSpinner';
import NavBar from './Routes/NavBar';
import { BrowserRouter } from 'react-router-dom';
import ProfileContext from './ProfileContext';
import jwt from 'jsonwebtoken'
import useLocalStorage from '../src/helpers/useLocalStorage';
//const jwt = require("jsonwebtoken");
//import jwt from 'jwt-decode'; // import dependency

function App() {
	const [ infoReceived, setInfoReceived ] = useState(false);
	const [ currentUser, setCurrentUser ] = useState(null);
	const [ token, setToken ] = useLocalStorage(
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0.FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc'
	);
	const [applicationIds, setApplicationIds] = useState(new Set([]));

	useEffect(
		function fetchUserData() {
			async function getUser() {
				if (token) {
					try {
						let { username } = jwt.decode(token);
						JoblyApi.token = token;

						let currentUser = await JoblyApi.getCurrentUser(username);

            // console.log("username",currentUser)

						setCurrentUser(currentUser);
						setApplicationIds(new Set(currentUser.applications));
					} catch (err) {
						console.log(err);
						setCurrentUser(null);
					}
				}
				setInfoReceived(true);
			}
			setInfoReceived(false);
			getUser();
		},
		[ token ]
	);

	async function signup(signupData) {
		try {
			let token = await JoblyApi.signup(signupData);
			setToken(token);
		} catch (err) {
			console.log('signup error', err);
		}
	}

	async function login(signupData) {
		try {
			let token = await JoblyApi.login(signupData);
			setToken(token);
		} catch (err) {
			console.log('login error', err);
		}
	}

	function logout() {
		setCurrentUser(null);
		setToken(null);
	}

	 /** Checks if a job has been applied for. */
	 function hasAppliedToJob(id) {
		return applicationIds.has(id);
	  }
	
	  /** Apply to a job: make API call and update set of application IDs. */
	  function applyToJob(id) {
		if (hasAppliedToJob(id)) return;
		JoblyApi.applyToJob(currentUser.username, id);
		setApplicationIds(new Set([...applicationIds, id]));
	  }

	if (!infoReceived) return <LoadingSpinner />;

	return (
		<BrowserRouter>
			<ProfileContext.Provider value={{ currentUser, setCurrentUser, hasAppliedToJob, applyToJob }}>
				<div className="App">
					<NavBar logout={logout} />
					<Routes login={login} signup={signup} />
				</div>
			</ProfileContext.Provider>
		</BrowserRouter>
	);
}

export default App;

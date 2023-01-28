import React, { useContext } from 'react';
import ProfileContext from '../ProfileContext';
import { Link } from 'react-router-dom';

function Home() {
	const { currentUser } = useContext(ProfileContext);
	
	return (
		<div>
			<h1>Jobly</h1>
			<p>All the jobs in one, convenient place.</p>
			{currentUser ? (
				<h3>Welcome Back,{currentUser.firstName}</h3>
			) : (
				<p>
					<Link to="/login">Login</Link>
					<Link to="/signup">Sign up</Link>
				</p>
			)}
		</div>
	);
}

export default Home;

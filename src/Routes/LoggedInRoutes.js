import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import ProfileContext from '../ProfileContext';

function LoggedInRoutes({ exact, path, children }) {
	const { currentUser } = useContext(ProfileContext);
	if (!currentUser) {
		return <Redirect to="/login" />;
	}
	return (
		<Route exact={exact} path={path}>
			{children}
		</Route>
	);
}

export default LoggedInRoutes;

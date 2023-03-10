import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from '../Homepage/Home';
import LoggedInRoutes from '../Routes/LoggedInRoutes';
import CompanyList from '../Companies/CompanyList';
import CompanyDetail from '../Companies/CompanyDetail';
import JobList from '../Jobs/JobList';
import EditProfile from '../Forms/EditProfile';
import LoginForm from '../Forms/LoginForm';
import NewUserForm from '../Forms/NewUserForm';

function Routes({login, signup}) {
	return (
		<div>
			<Switch>
				<Route exact path="/">
					<Homepage />
				</Route>
				<LoggedInRoutes exact path="/companies">
					<CompanyList />
				</LoggedInRoutes>

				<LoggedInRoutes exact path="/companies/:handle">
					<CompanyDetail />
				</LoggedInRoutes>

				<LoggedInRoutes exact path="/jobs">
					<JobList />
				</LoggedInRoutes>

				<Route exact path="/login">
					<LoginForm login={login}/>
				</Route>

				<Route exact path="/signup" children={<NewUserForm signup={signup}/>}/>
				

				<LoggedInRoutes exact path="/profile">
					<EditProfile />
				</LoggedInRoutes>

				<Redirect to="/" />
			</Switch>
		</div>
	);
}

export default Routes;

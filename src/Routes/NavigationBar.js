import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import ProfileContext from '../ProfileContext';

function NavigationBar({ logout }) {
	const { currentUser } = useContext(ProfileContext);

	function LoggedInNav() {
		return (
			<div>
				<Navbar>
					<Nav tabs>
						<NavItem>
							<NavLink active className="nav-link" to="/companies">
								Companies
							</NavLink>
						</NavItem>
						<NavItem>
							{/* /jobs */}
							<NavLink className="nav-link" to="/jobs">
								Jobs
							</NavLink>
						</NavItem>
						<NavItem>
							{/* /profile*/}
							<NavLink className="nav-link" to="/profile">
								Profile
							</NavLink>
						</NavItem>
						<NavItem>
							{/* /logout */}
							<NavLink className="nav-link" to="/logout" onClick={logout}>
								logout
							</NavLink>
						</NavItem>
					</Nav>
				</Navbar>
			</div>
		);
	}
	function LoggedOutNav() {
		return (
			<div>
				<Nav className="ml-auto" tabs>
					<NavItem>
						{/* /login */}
						<NavLink className="nav-link in" to="/login">
							Login
						</NavLink>
					</NavItem>
					<NavItem>
						{/* /signup */}
						<NavLink className="nav-link" to="/signup">
							Signup
						</NavLink>
					</NavItem>
				</Nav>
			</div>
		);
	}

	return (
		<Nav
			className=" navbar navbar-expand-md"
			style={{backgroundColor:"white"}}
		>
			<NavItem>
				<NavLink exact to="/" className="navbar-brand">
					Jobly
				</NavLink>
			</NavItem>
			{currentUser ? LoggedInNav() : LoggedOutNav()}
		</Nav>
	);
}

export default NavigationBar;

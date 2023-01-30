import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import ProfileContext from '../ProfileContext';

function NavBar({logout}) {
	const { currentUser } = useContext(ProfileContext);

	function LoggedInNav() {
		return (
			<div>
				<Navbar expand="md">
					<Nav className="ml-auto" navbar>
						<NavItem>
							{/* /Companies */}
							<NavLink to="/companies">Companies</NavLink>
						</NavItem>
						<NavItem>
							{/* /jobs */}
							<NavLink to="/jobs">Jobs</NavLink>
						</NavItem>
						<NavItem>
							{/* /profile*/}
							<NavLink to="/profile">Profile</NavLink>
						</NavItem>
						<NavItem>
							{/* /logout */}
							<NavLink to="/logout" nClick={logout}>logout</NavLink>
						</NavItem>
					</Nav>
				</Navbar>
			</div>
		);
	}
	function LoggedOutNav() {
		return (
            <div>
             <Nav className="ml-auto" navbar>
						<NavItem>
							{/* /login */}
							<NavLink to="/login">Login</NavLink>
						</NavItem>
						<NavItem>
							{/* /signup */}
							<NavLink to="/signup">Signup</NavLink>
						</NavItem>
					</Nav>
            </div>
        );
	}

	return (
		<nav>
			<NavLink exact to="/" className="navbar-brand">
				Jobly
			</NavLink>
			{currentUser ? LoggedInNav() : LoggedOutNav()}
		</nav>
	);
}

export default NavBar;

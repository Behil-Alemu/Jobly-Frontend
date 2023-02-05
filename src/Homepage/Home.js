import React, { useContext } from 'react';
import ProfileContext from '../ProfileContext';
import { Link } from 'react-router-dom';
import './Homepage.css';
import { Card, CardBody, CardHeader, CardText, Container } from 'reactstrap';

function Home() {
	const { currentUser } = useContext(ProfileContext);

	return (
		<div className="Homepage">
			<div className="container text-center">
				<Container className="d-flex vh-50">
					<Card
						body
						className="my-2"
						color="info"
						outline
						style={{
							width: '48rem',
							height: '18rem'
						}}
					>
						<CardHeader tag="h5">Jobly</CardHeader>
						<CardBody>
							<CardText>All the jobs in one, convenient place.</CardText>
							{currentUser ? (
								<h3>Welcome Back,{currentUser.firstName}</h3>
							) : (
								<p>
									<Link className="btn btn-info font-weight-bold mr-3" to="/login">
										Login
									</Link>
									<Link className="btn btn-outline-info font-weight-bold mr-3" to="/signup">
										Sign up
									</Link>
								</p>
							)}
						</CardBody>
					</Card>
				</Container>
			</div>
		</div>
	);
}

export default Home;

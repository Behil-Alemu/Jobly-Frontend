import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@mui/material';
import "./Company.css";

function CompanyCard({ name, description, logoUrl, handle }) {
	return (
		<Card variant="outlined">
			<div>
				<Link className="CompanyCard card" to={`/companies/${handle}`}>
					<div className="card-body">
						<h6 className="card-title">
							{name}
							{logoUrl &&  <img src={logoUrl} alt={name} className="float-right ml-5" />}
						</h6>
						<p>{description}</p>
					</div>
				</Link>
			</div>
		</Card>
	);
}

export default CompanyCard;

import React from 'react';
import { Link } from 'react-router-dom';

function CompanyCard({ name, description, logoUrl, handle }) {
	return (
		<div>
			<Link to={`/companies/${handle}`}>
				<div>
					<h5>
						{name}
						{<img src={logoUrl} alt={name} />}
					</h5>
					<p>{description}</p>
				</div>
			</Link>
		</div>
	);
}

export default CompanyCard;

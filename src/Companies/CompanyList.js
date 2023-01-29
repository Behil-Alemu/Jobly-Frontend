import React, { useState } from 'react';
import JoblyApi from '../api';
import LoadingSpinner from './helpers.js/LoadingSpinner';
import SearchBar from '../helpers.js/SearchBar';
import CompanyCard from './CompanyCard';

function CompanyList() {
	const [ companies, setCompanies ] = useState(null);

	async function getCompanies(name) {
		let companies = await JoblyApi.getCompanies(name);
		setCompanies(companies);
	}
	if (!companies) return <LoadingSpinner />;
	return (
		<div>
			<SearchBar searchFunction={getCompanies} />
			{companies.lenght ? (
				<div>
					{companies.map((c) => (
						<CompanyCard
							key={c.handle}
							handle={c.handle}
							name={c.name}
							description={c.description}
							logoUrl={c.logoUrl}
						/>
					))}
				</div>
			) : (
				<div>
					<p>Search not found</p>
				</div>
			)}
		</div>
	);
}

export default CompanyList;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../api';
import JobCardDetail from '../Jobs/JobCardDetail';
import LoadingSpinner from '../helpers/LoadingSpinner';
import {  List} from '@mui/material';


function CompanyDetail() {
	const { handle } = useParams();

	const [ company, setCompany ] = useState(null);

	useEffect(
		function getCompanyDetail() {
			async function getCompany() {
				setCompany(await JoblyApi.getCompany(handle));
			}
			getCompany();
		},
		[ handle ]
	);

	if (!company) return <LoadingSpinner />;
	console.log(company.jobs);

	return (
		<List >
			<div className="CompanyDetail col-md-8 offset-md-2">
				<h4>{company.name}</h4>
				<p>{company.description}</p>

				<div>
					{company.jobs.map((j) => (
						<JobCardDetail
							key={j.id}
							id={j.id}
							title={j.title}
							salary={j.salary}
							equity={j.equity}
							companyName={j.companyName}
						/>
					))}
				</div>
				{/* <JobList jobs={company.jobs} /> */}
			</div>
		</List>
	);
}

export default CompanyDetail;

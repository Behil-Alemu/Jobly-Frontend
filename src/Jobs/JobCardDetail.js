import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ProfileContext from '../ProfileContext';
import { Card, Alert } from '@mui/material';

function JobCardDetail({ id, title, salary, equity, companyName }) {
	const { hasAppliedToJob, applyToJob } = useContext(ProfileContext);
	const [ applied, setApplied ] = useState();
	useEffect(
		function updateAppliedStatus() {
			

			setApplied(hasAppliedToJob(id));
		},
		[ id, hasAppliedToJob ]
	);

	async function handleApply(evt) {
		if (hasAppliedToJob(id)) return;
		applyToJob(id);
		setApplied(true);
	}
    
    
        

	return (
		<Card variant="outlined">
			<div>
				{applied}
				<Link to={`/jobs/${title}`}>
					<div>
						<h5>{title}</h5>

						<p>salary {salary}</p>
						<p>equity {equity}</p>
						<button onClick={handleApply} disabled={applied}>
							{applied ? 'Applied' : 'Apply'}
						</button>
					</div>
				</Link>
			</div>
		</Card>
	);
}

export default JobCardDetail;

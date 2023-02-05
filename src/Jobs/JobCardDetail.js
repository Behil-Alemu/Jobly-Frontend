import React, { useEffect, useState, useContext } from 'react';
import ProfileContext from '../ProfileContext';
import { Button, Card } from '@mui/material';

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
					<div>
						<h5>{title}</h5>

						<p>salary {salary}</p>
						<p>equity {equity}</p>
						<Button onClick={handleApply} variant="outlined" type='submit' disabled={applied}>
							{applied ? 'Applied' : 'Apply'}
						</Button>
					</div>
			</div>
		</Card>
	);
}

export default JobCardDetail;

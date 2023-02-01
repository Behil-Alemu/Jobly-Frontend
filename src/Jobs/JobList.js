import React, { useState, useEffect } from 'react';
import JoblyApi from '../api';
import SearchBar from '../helpers/SearchBar';
import JobCardDetail from './JobCardDetail';
import LoadingSpinner from '../helpers/LoadingSpinner';

function JobList() {
	const [ jobs, setJobs ] = useState(null);

	useEffect(function getAllJobsOnMount() {
		console.debug('JobList useEffect search() triggered');
		search();
	}, []);

	/** Triggered by search form submit; reloads jobs. */
	async function search(title) {
		let jobs = await JoblyApi.getJobs(title);
		setJobs(jobs);
	}

	if (!jobs) return <LoadingSpinner />;
	console.log(jobs.length);
	return (
		<div className="JobList col-md-8 offset-md-2">
			<SearchBar searchFor={search} />
			{jobs.length ? (
				<div>
					{jobs.map((j) => (
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
			) : (
				<p className="lead">Sorry, no results were found!</p>
			)}
		</div>
	);
}

export default JobList;

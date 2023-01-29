import React,{useState}from 'react';
import JoblyApi from '../api';
import SearchBar from '../helpers.js/SearchBar';
import JobCardDetail from './JobCardDetail';


function JobList() {
    const [jobs, setJobs] =useState(null)

    async function getJobList(jobTitle){
        let jobs = JoblyApi.getJobs(jobTitle)
        setJobs(jobs)
    }
    return(
        <div>
         <SearchBar searchFunction={getJobList}/>
         {jobs.lenght? (
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
				<div>
					<p>Search not found</p>
				</div>
			)}
        </div>
    )

}

export default JobList;
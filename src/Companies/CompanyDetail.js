import React, { useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import JoblyApi from '../api';
import LoadingSpinner from '../helpers.js/LoadingSpinner';
import JobList from '../Jobs/JobCards';


function CompanyDetail() {
    const {handle} = useParams();

    const [company, setCompany] = useState(null);

    useEffect(function getCompanyDetail(){
        async function getCompany(){
            setCompany(await JoblyApi.getCompany(handle))
        }
        getCompany()
    }, [handle]);
    
    if(!company) return <LoadingSpinner/>

    return(
        <div>
            <h4>{company.name}</h4>
            <p>{company.desciption}</p>
            <JobList jobs={company.jobs}/>
        </div>
    )


}

export default CompanyDetail;
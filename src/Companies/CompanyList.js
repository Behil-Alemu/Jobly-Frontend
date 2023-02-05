import React, { useState,useEffect } from 'react';
import JoblyApi from '../api';
import LoadingSpinner from '../helpers/LoadingSpinner';
import SearchBar from '../helpers/SearchBar';
import CompanyCard from './CompanyCard';



function CompanyList() {
	console.debug("CompanyList");
  
	const [companies, setCompanies] = useState(null);
  
	useEffect(function getCompaniesOnMount() {
	  console.debug("CompanyList useEffect search() triggered");
	  search();
	}, []);
  
	/** Triggered by search form submit; reloads companies. */
	async function search(name) {
	  let companies = await JoblyApi.getCompanies(name);
	  setCompanies(companies);
	}
  
	if (!companies) return <LoadingSpinner />;
  
	return (
		<div className="CompanyList col-md-8 offset-md-2">
		  <SearchBar searchFor={search} />
		  {companies.length
			  ? (
				  <div className="CompanyList-list">
					{companies.map(c => (
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
				  <p className="lead">Sorry, no results were found!</p>
			  )}
		</div>
	);
  }
  
  export default CompanyList;
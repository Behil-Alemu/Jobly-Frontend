import React, { useState } from 'react';
import {Button} from '@mui/material';
import '../Forms/Form.css'


function SearchBar({ searchFor }) {
	const [ searchTerm, setSearchTerm ] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		//removes whitespace from both ends of a string
		searchFor(searchTerm.trim() || undefined);
		setSearchTerm(searchTerm.trim());
	}

	function handleChange(e) {
		setSearchTerm(e.target.value);
	}
	return (
		<div className="SearchForm mb-4">
			<form className="form-inline" onSubmit={handleSubmit}>
				<input
				className="form-control form-control-lg flex-grow-1"
					type="text"
					name="searchTerm"
					placeholder="Apple..."
					value={searchTerm}
					onChange={handleChange}
				/>
				<Button type="submit" size="small" variant="outlined">
					Submit
				</Button>
			</form>
		</div>
	);
}
export default SearchBar;

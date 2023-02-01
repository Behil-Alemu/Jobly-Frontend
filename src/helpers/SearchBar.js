import React, { useState } from 'react';

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
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="searchTerm"
					placeholder="Apple..."
					value={searchTerm}
					onChange={handleChange}
				/>
				<button type="submit" className="btn btn-lg btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
}
export default SearchBar;

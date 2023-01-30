import React, { useState } from "react";


function SearchBar({searchFunction}){

    const [searchTerm, setSearchTerm] = useState('');
    function handleSubmit(e){
        e.preventDefault()
        //removes whitespace from both ends of a string 
        searchFunction(searchTerm.trim())
        setSearchTerm(searchTerm.trim())


    }

    function handleChange(e){
        setSearchTerm(e.target.value)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                 type="text"
                 name="searchTerm"
                 placeholder="Apple..."
                 value={searchTerm}
                 onChange={handleChange}
                />
            </form>
        </div>
    )

}
export default SearchBar
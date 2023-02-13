import React from "react";

function SearchBar({searchTerm, onChange}) {

  function handleChange(e){
    onChange(e.target.value);

  }


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
        value = {searchTerm}
      />
    </div>
  );
}

export default SearchBar;
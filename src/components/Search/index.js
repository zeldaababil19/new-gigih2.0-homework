import React from 'react';

const Search = (props) => {
  return (
    <div>
      <label htmlFor="keyword" className="search-label">
        HomeWork Spotify Search
      </label>
      <form className="search-bar" onSubmit={props.handleSearchSubmit}>
        <input id="keyword" name="keyword" type="text" className="input" onChange={props.handleSearchChange} value={props.searchInput} placeholder="Search" required />
      </form>
    </div>
  );
};
export default Search
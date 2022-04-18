import React from 'react';

const Search = (props) => {
  return (
    <div>
      <form className="search-bar" onSubmit={props.handleSearchSubmit}>
        <label htmlFor="keyword" className="search-label">
          HomeWork Spotify Search
        </label>
        <input id="keyword" name="keyword" type="text" className="input" onChange={props.handleSearchChange} value={props.searchInput} placeholder="Search" required />
        <button type="submit" className="btn btn--search" disabled={!props.searchInput}>
          Search
        </button>
      </form>
    </div>
  );
};
export default Search;

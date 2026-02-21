import React from 'react';
import './Searchbar.css';

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="What kind of food? (optional)"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;

import React from 'react';
import './Searchbar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="header">
        <h3>Find the best rated place here!</h3>
        <input type="text" placeholder="Search restaurant..." />
      </div>
      <div className="categories">
        <button>Restaurant</button>
        <button>KFC</button>
        <button>Indomaret</button>
        <button>Starbucks</button>
      </div>
    </div>
  );
};

export default SearchBar;

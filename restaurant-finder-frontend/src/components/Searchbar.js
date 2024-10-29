import React, { useState } from 'react';
import './Searchbar.css'; // Import your CSS file

const Searchbar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Handle your search logic here
        console.log(searchQuery); // Replace this with actual search functionality
    };

    return (
        <div style={SearchbarStyle}>
            <div className="topnav">
                <div className="search-container">
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text" 
                            placeholder="Search.." 
                            name="search" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)} 
                        />
                        <button type="submit" aria-label="Search">
                            <i className="fas fa-search" /> {/* Updated icon class */}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

// Styles
const SearchbarStyle = {
    padding: '10px',
    backgroundColor: '#e9e9e9',
};

export default Searchbar;

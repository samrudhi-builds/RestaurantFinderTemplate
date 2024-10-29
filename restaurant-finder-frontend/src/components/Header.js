import React from 'react';
import logo from '../logo.svg'; // Ensure the logo path is correct

const Header = () => {
    return (
        <header style={headerStyle}>
            <img src={logo} alt="Restaurant Finder Logo" style={logoStyle} />
            <h1 style={titleStyle}>Restaurant Finder</h1>
            <nav style={navStyle}>
                <a href="/" style={linkStyle}>Home</a>
                <a href="/about" style={linkStyle}>About</a>
                <a href="/contact" style={linkStyle}>Contact</a>
            </nav>
        </header>
    );
};

// Styles
const headerStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column', // Stack items vertically
    alignItems: 'center', // Center items
};

const logoStyle = {
    height: '50px',
    marginRight: '20px',
};

const titleStyle = {
    fontSize: '2.5rem',
    margin: 0,
};

const navStyle = {
    display: 'flex', // Aligns navigation items in a row
    gap: '15px', // Space between links
    marginTop: '10px', // Space above the nav
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem', // Smaller font size
};

export default Header;

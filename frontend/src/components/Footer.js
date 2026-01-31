import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div style={footerContent}>
                <p>&copy; 2024 Restaurant Finder. All rights reserved.</p>
                <div style={socialMediaStyle}>
                    <a href="#" style={socialLinkStyle}>Facebook</a>
                    <a href="#" style={socialLinkStyle}>Twitter</a>
                    <a href="#" style={socialLinkStyle}>Instagram</a>
                </div>
            </div>
        </footer>
    );
};

// Styles
const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    position: 'relative', // Make sure it stays at the bottom
    bottom: 0,
    width: '100%',
};

const footerContent = {
    maxWidth: '1200px',
    margin: '0 auto',
};

const socialMediaStyle = {
    marginTop: '10px',
};

const socialLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px',
};

export default Footer;

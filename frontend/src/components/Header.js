import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';  // Updated to match the naming convention
import { FaBell } from 'react-icons/fa'; // For the bell icon

const Header = () => {
  const navigate = useNavigate();

  // Redirect to profile page
  const goToProfile = () => {
    navigate('/profile');  // Assuming you have a profile page
  };

  return (
    <div className="header">
      {/* Profile image */}
      <div className="profile-section" onClick={goToProfile}>
        <img src="profile-placeholder.png" alt="Profile" className="profile-img" />
      </div>

      {/* Greeting message */}
      <div className="greeting">
        <h4>Hi, Excel</h4> {/* This could be dynamic */}
      </div>

      {/* Notification bell icon */}
      <div className="notification-icon">
        <FaBell size={24} />
      </div>
    </div>
  );
};

export default Header;

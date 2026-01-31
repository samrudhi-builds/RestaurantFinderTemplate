import React from 'react';
import RestaurantCard from '../components/RestaurantCard';
import { useNavigate } from 'react-router-dom';

const RestaurantDetails = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/map');  // Redirect to the map page
  };

  return (
    <div className="restaurant-details">
      <RestaurantCard />
      <button onClick={handleOrderClick}>Show Directions</button>
    </div>
  );
};

export default RestaurantDetails;

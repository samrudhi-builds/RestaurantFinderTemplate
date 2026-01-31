import React from 'react';
import './RestaurantCard.css';

const RestaurantCard = ({ name, imgSrc, directions }) => {
  return (
    <div className="restaurant-card">
      <img src={imgSrc} alt={name} className="restaurant-img" />
      <h4 className="restaurant-name">{name}</h4>
      <a href={directions} className="restaurant-directions">Show directions</a>
    </div>
  );
};

export default RestaurantCard;

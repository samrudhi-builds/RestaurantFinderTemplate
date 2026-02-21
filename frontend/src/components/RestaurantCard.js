import React, { useState } from 'react';
import './RestaurantCard.css';

function RestaurantCard({ restaurant }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="restaurant-card">
      <img 
        src={restaurant.image} 
        alt={restaurant.name}
        className="restaurant-image"
      />
      <div className="restaurant-info">
        <div className="restaurant-header">
          <h3>{restaurant.name}</h3>
          <span className="price">{restaurant.price}</span>
        </div>
        
        <div className="restaurant-meta">
          <span className="cuisine">{restaurant.cuisine}</span>
          <span className="rating">★ {restaurant.rating}</span>
          <span className="distance">{restaurant.distance} mi</span>
        </div>
        
        <p className="address">{restaurant.address}</p>
        
        <button 
          className="menu-button"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? 'Hide menu' : 'See what\'s good here'}
        </button>
        
        {showMenu && (
          <div className="menu-highlights">
            <h4>Popular items:</h4>
            <ul>
              {restaurant.menuHighlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default RestaurantCard;

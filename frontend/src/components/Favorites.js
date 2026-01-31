import React from 'react';

const Favorites = () => {
  const favorites = [
    { name: 'Kedai Surabi', image: 'kedai-surabi.png', directions: '#' },
    { name: 'Kedai Kopi', image: 'kedai-kopi.png', directions: '#' },
  ];

  return (
    <div className="favorites-section">
      <h4>Favourite</h4>
      <div className="favorite-list">
        {favorites.map((fav, index) => (
          <div key={index} className="favorite-card">
            <img src={fav.image} alt={fav.name} />
            <p>{fav.name}</p>
            <a href={fav.directions}>Show directions</a>
          </div>
        ))}
      </div>
      <div className="recommended">
        <h4>Recommended</h4>
        <div className="recommended-card">
          <p>Warunk normal</p>
          <span>⭐⭐⭐⭐</span>
        </div>
      </div>
    </div>
  );
};

export default Favorites;

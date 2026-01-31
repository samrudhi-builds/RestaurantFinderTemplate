import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/Searchbar'; // Correct capitalization
import RestaurantCard from '../components/RestaurantCard'; // Assuming you have this component
import './HomePage.css'; // For styling

const HomePage = () => {
  // Array of restaurants
  const restaurants = [
    { name: 'Kedai Surabi', imgSrc: 'path-to-image-1.jpg', directions: '/directions/1' },
    { name: 'Kedai Kopi', imgSrc: 'path-to-image-2.jpg', directions: '/directions/2' },
    { name: 'Warunk Normal', imgSrc: 'path-to-image-3.jpg', directions: '/directions/3' },
    // Add more restaurants as needed
  ];

  return (
    <div className="home-page">
      {/* Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar />

      {/* Restaurant Grid */}
      <div className="restaurant-grid">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard 
            key={index} 
            name={restaurant.name} 
            imgSrc={restaurant.imgSrc} 
            directions={restaurant.directions} 
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

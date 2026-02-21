import React, { useState, useEffect } from 'react';
import './App.css';
import RestaurantList from './components/RestaurantList';
import SearchBar from './components/Searchbar';
import LocationInput from './components/LocationInput';
import Header from './components/Header';

function App() {
  const [location, setLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.log('Error getting location:', error);
        }
      );
    }
  }, []);

  const handleSearch = async () => {
    if (!location && !userLocation) {
      alert('Please enter a location or enable location services');
      return;
    }

    setLoading(true);
    
    const mockRestaurants = [
      {
        id: 1,
        name: 'The Gourmet Kitchen',
        cuisine: 'Italian',
        rating: 4.5,
        distance: 1.2,
        price: '$$',
        address: '123 Main St',
        image: 'https://via.placeholder.com/300x200',
        menuHighlights: ['Pasta Carbonara', 'Margherita Pizza', 'Tiramisu']
      },
      {
        id: 2,
        name: 'Sushi Paradise',
        cuisine: 'Japanese',
        rating: 4.7,
        distance: 0.8,
        price: '$$$',
        address: '456 Oak Ave',
        image: 'https://via.placeholder.com/300x200',
        menuHighlights: ['Salmon Sashimi', 'California Roll', 'Miso Soup']
      },
      {
        id: 3,
        name: 'Taco Fiesta',
        cuisine: 'Mexican',
        rating: 4.3,
        distance: 2.1,
        price: '$',
        address: '789 Pine Rd',
        image: 'https://via.placeholder.com/300x200',
        menuHighlights: ['Fish Tacos', 'Guacamole', 'Churros']
      },
      {
        id: 4,
        name: 'Burger Haven',
        cuisine: 'American',
        rating: 4.4,
        distance: 1.5,
        price: '$$',
        address: '321 Elm St',
        image: 'https://via.placeholder.com/300x200',
        menuHighlights: ['Classic Burger', 'Sweet Potato Fries', 'Milkshake']
      },
      {
        id: 5,
        name: 'Spice Route',
        cuisine: 'Indian',
        rating: 4.6,
        distance: 1.9,
        price: '$$',
        address: '654 Maple Dr',
        image: 'https://via.placeholder.com/300x200',
        menuHighlights: ['Butter Chicken', 'Garlic Naan', 'Samosas']
      }
    ];

    let filteredRestaurants = mockRestaurants;
    if (searchQuery) {
      filteredRestaurants = mockRestaurants.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
          restaurant.menuHighlights.some(item => 
            item.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    filteredRestaurants.sort((a, b) => a.distance - b.distance);

    setTimeout(() => {
      setRestaurants(filteredRestaurants);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="search-section">
          <h2>Where are you eating?</h2>
          <LocationInput 
            location={location} 
            setLocation={setLocation}
            userLocation={userLocation}
          />
          <SearchBar 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery}
          />
          <button 
            className="search-button" 
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? 'Looking...' : 'Find Restaurants'}
          </button>
        </div>
        
        {restaurants.length > 0 && (
          <div className="results-section">
            <h3>We found {restaurants.length} place{restaurants.length !== 1 ? 's' : ''}</h3>
            <RestaurantList restaurants={restaurants} />
          </div>
        )}
        
        {restaurants.length === 0 && !loading && location && (
          <div className="no-results">
            <p>Nothing here. Try searching somewhere else?</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

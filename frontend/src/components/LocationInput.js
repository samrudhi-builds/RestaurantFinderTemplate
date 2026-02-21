import React from 'react';
import './LocationInput.css';

function LocationInput({ location, setLocation, userLocation }) {
  const handleUseCurrentLocation = () => {
    if (userLocation) {
      setLocation(`${userLocation.lat}, ${userLocation.lng}`);
    } else {
      alert('Unable to get your current location. Please enter it manually.');
    }
  };

  return (
    <div className="location-input">
      <input
        type="text"
        placeholder="City, address, or zip code"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="location-field"
      />
      <button 
        onClick={handleUseCurrentLocation}
        className="location-button"
        type="button"
      >
        Use My Location
      </button>
    </div>
  );
}

export default LocationInput;

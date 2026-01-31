import React from 'react';
import './DirectionsMap.css';

const DirectionsMap = () => {
  return (
    <div className="directions-map">
      <img src="map.png" alt="Map" className="map-image" />
      <div className="map-info">
        <h4>Upnormal Bogor</h4>
        <p>Open | Closes at 21:00</p>
        <p>5 minutes by walk</p>
        <button>Show Directions</button>
      </div>
    </div>
  );
};

export default DirectionsMap;

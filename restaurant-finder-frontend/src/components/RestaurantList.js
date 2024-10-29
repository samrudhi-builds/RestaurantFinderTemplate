import React from 'react';

const RestaurantList = () => {
    // Dummy data for restaurants
    const restaurants = [
        { id: 1, name: "Pizza Place", location: "123 Main St" },
        { id: 2, name: "Sushi Spot", location: "456 Elm St" },
        { id: 3, name: "Burger Joint", location: "789 Oak St" },
    ];

    return (
        <div>
            <h2>Nearby Restaurants</h2>
            <ul>
                {restaurants.map((restaurant) => (
                    <li key={restaurant.id}>
                        {restaurant.name} - {restaurant.location}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantList;

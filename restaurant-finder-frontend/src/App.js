import React from 'react';
import Header from './components/Header';
import RestaurantList from './components/RestaurantList';
import RestaurantDetails from './components/RestaurantDetails';
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';

const App = () => {
    return (
        <div>
            <Header />
            <Searchbar />
            <RestaurantList />
            <RestaurantDetails />
            <Footer />
        </div>
    );
};

export default App;

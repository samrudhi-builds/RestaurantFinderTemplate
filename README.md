# Restaurant Finder with Location-Based Menu Recommendations

A modern React application that helps users discover nearby restaurants with location-based menu recommendations.

## Features

- Search by Location: Enter your address or use your current location
- Restaurant Discovery: Find restaurants based on your location
- Distance Tracking: See how far each restaurant is from you
- Ratings & Reviews: View restaurant ratings at a glance
- Menu Highlights: Discover popular menu items at each location
- Price Ranges: Filter by budget-friendly options
- Smart Search: Search by restaurant name, cuisine type, or menu items

## Technologies Used

- **React 18** - Modern React with hooks
- **React Router** - For navigation
- **React Icons** - Beautiful icons
- **CSS3** - Custom styling with gradients and animations

## Quick Start Guide

### 1. Navigate to the frontend folder
```bash
cd frontend
```

### 2. Install dependencies (first time only)
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```

The application will automatically open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

## Project Structure

```
frontend/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.js & Header.css
│   │   ├── Searchbar.js & Searchbar.css
│   │   ├── LocationInput.js & LocationInput.css
│   │   ├── RestaurantList.js & RestaurantList.css
│   │   └── RestaurantCard.js & RestaurantCard.css
│   ├── App.js & App.css
│   ├── index.js & index.css
│   └── reportWebVitals.js
└── package.json
```

## How to Use

1. **Enter Your Location**: Type in your address, city, or zip code, or click "Use Current Location" to automatically detect your position.

2. **Search (Optional)**: Use the search bar to filter by restaurant name, cuisine type, or specific menu items.

3. **Browse Results**: View a list of nearby restaurants with ratings, distance, and price range.

4. **View Menu Highlights**: Click "Show Menu Highlights" on any restaurant card to see popular menu items.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

# Restaurant Finder - React Frontend Template

A complete, production-ready React template for building restaurant finder applications. Features a modern UI with location-based search, restaurant cards, and menu highlights.

## Overview

This is a fully-functional frontend template with custom brutalist design, responsive layout, and clean component architecture. Use it as-is for prototypes or extend it with your own backend API for production applications.

## Features

- **Location Search** - Manual entry or browser geolocation
- **Smart Filtering** - Search by name, cuisine type, or menu items
- **Restaurant Cards** - Rating, distance, price range, and address display
- **Menu Highlights** - Expandable popular items section
- **Responsive Design** - Mobile and desktop optimized
- **Custom Styling** - Brutalist aesthetic with serif fonts and hard shadows
- **Component Architecture** - Clean, reusable React components

## Technologies Used

- **React 18** - Modern React with hooks
- **React Router** - For navigation
- **React Icons** - Icon library
- **CSS3** - Custom brutalist styling with hard shadows

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

## Usage

The template includes mock restaurant data for demonstration. To connect your own data source, modify the `handleSearch` function in `frontend/src/App.js`:

```javascript
// Replace mock data with your API call
const response = await fetch(`YOUR_API_URL?location=${location}&query=${searchQuery}`);
const data = await response.json();
setRestaurants(data);
```

## Extension Options

This template is designed to work with any backend. Common integrations:

- Google Places API
- Yelp Fusion API
- Custom REST or GraphQL API
- Firebase/Supabase
- Node.js + MongoDB/PostgreSQL

## Contributing

Feel free to use this template for your own projects! Contributions and improvements are welcome.

## License

MIT License - see [LICENSE](LICENSE) file for details.

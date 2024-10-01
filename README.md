# Weather App Documentation

## Overview

This project is a weather application built using React Native and Expo. It fetches weather data from the OpenWeatherMap API and displays current weather conditions as well as a 5-day forecast.

## Key Components

### App.js

The main component that initializes the app and handles the core logic:

- Fetches user's location using Expo Location
- Makes API calls to OpenWeatherMap
- Renders the CurrentWeather and Forecasts components

### CurrentWeather.js

Displays the current weather information:

- City name
- Current date
- Weather icon
- Temperature
- Weather description

### Forecasts.js

Shows a scrollable list of weather forecasts:

- Utilizes the Weather component to display individual forecast items
- Formats dates using the date-fns library

### Weather.js

A placeholder component for individual forecast items (currently empty).

## Dependencies

- axios: For making HTTP requests
- date-fns: Date formatting and manipulation
- expo: React Native framework
- expo-constants: Access to device constants
- expo-location: Geolocation services
- react-native-paper: UI component library

## Setup and Running

1. Install dependencies: `npm install`
2. Start the Expo development server: `npm start`
3. Run on iOS or Android simulator or scan QR code with Expo Go app on a physical device

## API Integration

The app uses the OpenWeatherMap API. An API key is required and should be inserted in the `API_URL` constant in `App.js`.

## Future Improvements

- Implement the Weather component to display individual forecast items
- Add error handling for API calls and location services
- Implement a settings page for changing units or location manually
- Add more detailed weather information (humidity, wind speed, etc.)
- Improve UI/UX with animations and a more polished design
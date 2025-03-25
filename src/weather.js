import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY; // Securely use the API key

const fetchWeather = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`
    );
    const data = await response.json();
    console.log("Weather Data:", data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

const App = () => {
  useEffect(() => {
    fetchWeather();
  }, []);

  return <div>Check the console for weather data</div>;
};

export default App;

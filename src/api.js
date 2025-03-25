const API_KEY = process.env.REACT_APP_API_KEY; // Secure API key

export const fetchWeather = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null; // ✅ Prevents crashing if request fails
  }
};

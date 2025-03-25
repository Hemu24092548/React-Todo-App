import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./redux/authSlice";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { fetchWeather } from "./api"; // Import API function

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather("London").then((data) => {
      if (data && data.main) {
        setWeather(data);
      } else {
        console.error("Invalid weather data:", data);
      }
    });
  }, []);

  return (
    <div className="app">
      {isAuthenticated ? (
        <>
          <button onClick={() => dispatch(logout())}>Logout</button>
          <TaskInput />
          <TaskList />
          
          {/* ✅ Only show weather if data is available */}
          {weather ? (
            <div className="weather">
              <h2>Weather in {weather.name}</h2>
              <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
              <p>Condition: {weather.weather[0].description}</p>
            </div>
          ) : (
            <p>Loading weather data...</p> // ✅ Prevents undefined error
          )}
        </>
      ) : (
        <button onClick={() => dispatch(login())}>Login</button>
      )}
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Replace with your weather API and key
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.209&current_weather=true'
    )
      .then((response) => response.json())
      .then((data) => setWeather(data.current_weather));
  }, []);

  return (
    <div className="weather">
      <h3>Weather Updates</h3>
      {weather ? (
        <div>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Condition: {weather.weathercode}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;

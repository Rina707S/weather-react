import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [weather, setWeather] = useState({});
  let [city, setCity] = useState("");
  let [message, setMessage] = useState(false);

  function showWeather(response) {
    setMessage(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather.main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c9aaec0a4189697bb2f4013911b89486&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city..." onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (message) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {weather.temperature}C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}m/c</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}

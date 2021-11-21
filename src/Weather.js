import React from "react";
import "./Weather.css";
import Search from "./Search";

export default function Weather() {
  let weatherData = {
    city: "Tokyo",
    temperature: 16,
    date: "Sunday 23:00",
    description: "Cloudy",
    imgUrl:
      "https://cdn3.iconfinder.com/data/icons/tiny-weather-1/512/rainbow-128.png",
    humidity: 80,
    wind: 2,
  };
  return (
    <div className="Weather">
      <h1>{weatherData.city}</h1>
      <ul>
        <li>Last updated: {weatherData.date}</li>
        <li>{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="weather-icon"
            />
            <span className="temp">{weatherData.temperature}</span>
            <span className="units">
              <a href="/" className="active">
                °C
              </a>{" "}
              /<a href="/">°F</a>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} m/s</li>
          </ul>
        </div>
      </div>

      <form className="search-form">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Try another city"
              autofocus="on"
              className="try form-control shadow-sm"
            />
          </div>
          <div className="col-3">
            <Search />
            <div className="col-3">
              <button className="btn btn-success">Here</button>
            </div>
          </div>
        </div>
      </form>
      <br />
      <hr />
    </div>
  );
}

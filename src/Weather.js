import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ loaded: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      loaded: true,
      date: "Wednesday 10:00",
      city: response.data.name,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      feels_like: response.data.temperature.feels_like,
      icon: response.data.condition.icon_url,
    });
  }

  if (weather.loaded) {
    return (
      <div className="Weather">
        <div className="header">
          <div className="row mb-5">
            <div className="col-6  d-flex justify-content-start ">
              <h5>Nimbusly</h5>
            </div>

            <div className="col-6 d-flex justify-content-end">
              <button className="btn-theme btn btn-secondary btn-sm">
                Dark Mode
              </button>
            </div>
          </div>

          <form>
            <div className="row form">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Search for a city.."
                  autoFocus="on"
                  className="form-control search-input "
                />
              </div>
              <div className="col-3">
                <input type="submit" value="search" className="input-btn btn" />
              </div>
            </div>
          </form>
        </div>

        <div className="content">
          <div className="row">
            <div className="col-6 d-flex justify-content-start">
              <h4>
                <strong>Current Weather</strong>
              </h4>
            </div>

            <div className="col-6 mt-3 d-flex justify-content-end">
              <h2>
                <strong>📍{props.defaultCity}</strong>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <ul>
                <li>{weather.date}</li>
                <li className="text-capitalize">{weather.description}</li>
              </ul>
            </div>
          </div>
          <div className="row current-weather-wrap">
            <div className="col-6 d-flex justify-content-end">
              <img
                src={weather.icon}
                alt={weather.description}
                className="img"
              />
            </div>
            <div className="col-6">
              <div className="current-weather">
                <span className="current-weather-temperature">
                  {Math.round(weather.temperature)}
                </span>
                <span className="current-weather-units">°C</span>
              </div>
            </div>
          </div>

          <div className="weather-info">
            <div className="row text-center">
              <div className="col-4">
                <div className="weather-more-info">
                  <div className="weather-circle feels-like">
                    {Math.round(weather.feels_like)}°C
                  </div>
                  <div>Feels like</div>
                </div>
              </div>

              <div className="col-4">
                <div className="weather-more-info">
                  <div className="weather-circle humidity">
                    {weather.humidity}%
                  </div>
                  <div>Humidity</div>
                </div>
              </div>
              <div className="col-4">
                <div className="weather-more-info">
                  <div className="weather-circle wind">{weather.wind}km/hr</div>
                  <div>Wind</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ec00aa08afab6385c60b468o5877e14t";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return <p>Loading...</p>;
  }
}

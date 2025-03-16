import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data.dt);
    setWeatherData({
      loaded: true,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      feels_like: response.data.temperature.feels_like,
      icon: response.data.condition.icon_url,
    });
    console.log("Date from API:", new Date(response.data.dt * 1000));
  }

  function search() {
    const apiKey = "ec00aa08afab6385c60b468o5877e14t";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChangeCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
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

          <form onSubmit={handleSubmit}>
            <div className="row form">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Search for a city.."
                  autoFocus="on"
                  className="form-control search-input "
                  onChange={handleChangeCity}
                />
              </div>
              <div className="col-3">
                <input type="submit" value="search" className="input-btn btn" />
              </div>
            </div>
          </form>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return <p>Loading...</p>;
  }
}

import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data.time);
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
    console.log("Date from API:", new Date(response.data.time * 1000));
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
          <div className="img-logo">
            <img src="images/logo.png" alt="Nimbusly Logo" className="logo" />
          </div>

          <form onSubmit={handleSubmit} className="search-form">
            <div className="row g-2 justify-content-center">
              <div className="col-12 col-md-8">
                <input
                  type="search"
                  placeholder="Search for a city.."
                  autoFocus="on"
                  className="form-control search-input "
                  onChange={handleChangeCity}
                />
              </div>
              <div className="col-12 col-md-3">
                <input
                  type="submit"
                  value="Search"
                  className="input-btn btn w-100"
                />
              </div>
            </div>
          </form>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return <p className="text-center">Loading...</p>;
  }
}

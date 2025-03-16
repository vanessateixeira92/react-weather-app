import React from "react";
import FormattedDate from "./FormattedDate";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  console.log(props.data);
  return (
    <div className="WeatherInfo">
      <div className="content">
        <div className="row">
          <div className="col-6 d-flex justify-content-start">
            <h4>
              <strong>Current Weather</strong>
            </h4>
          </div>

          <div className="col-6 mt-3 d-flex justify-content-end">
            <h2>
              <strong>📍{props.data.city}</strong>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <ul>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
              <li className="text-capitalize">{props.data.description}</li>
            </ul>
          </div>
        </div>
        <div className="row current-weather-wrap">
          <div className="col-6 d-flex justify-content-end">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="img"
            />
          </div>
          <div className="col-6">
            <div className="current-weather">
              <span className="current-weather-temperature">
                {Math.round(props.data.temperature)}
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
                  {Math.round(props.data.feels_like)}°C
                </div>
                <div>Feels like</div>
              </div>
            </div>

            <div className="col-4">
              <div className="weather-more-info">
                <div className="weather-circle humidity">
                  {props.data.humidity}%
                </div>
                <div>Humidity</div>
              </div>
            </div>
            <div className="col-4">
              <div className="weather-more-info">
                <div className="weather-circle wind">
                  {props.data.wind}km/hr
                </div>
                <div>Wind</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

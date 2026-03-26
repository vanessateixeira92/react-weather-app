import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  console.log(props.data);
  return (
    <div className="WeatherInfo fade-in">
      <div className="content">
        <div className="row align-items-center gy-4 main-layout">
          {/* ESQUERDA → TEXTO */}
          <div className="col-12 col-lg-6">
            <div className="weather-side-info">
              <h1 className="city-name">📍 {props.data.city}</h1>

              <ul className="weather-meta">
                <li>
                  <FormattedDate date={props.data.date} />
                </li>
                <li className="text-capitalize">
                  {props.data.description} in {props.data.city}
                </li>
              </ul>
            </div>
          </div>
          {/* DIREITA → CARD PRINCIPAL */}
          <div className="col-12 col-lg-6">
            <div className="main-weather-card">
              <div className="row align-items-center">
                <div className="col-6 text-center">
                  <WeatherIcon
                    description={props.data.description}
                    date={props.data.date}
                  />
                </div>
                <div className="col-6 text-center text-md-start">
                  <span className="temperature">
                    {Math.round(props.data.temperature)}
                  </span>
                  <span className="unit">°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="weather-info">
          <div className="row text-center ">
            <div className="col-12 col-md-4">
              <div className="info-card feels-card">
                <div className="info-value">
                  {Math.round(props.data.feels_like)}°C
                </div>
                <div className="info-label">Feels like</div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="info-card humidity-card">
                <div className="info-value">{props.data.humidity}%</div>
                <div className="info-label">Humidity</div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="info-card wind-card">
                <div className="info-value">{props.data.wind}km/hr</div>
                <div className="info-label">Wind</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

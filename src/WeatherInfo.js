import React from "react";
import { MapPin, Thermometer, Droplets, Wind } from "lucide-react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  console.log(props.data);
  console.log("WeatherInfo coordinates:", props.data.coordinates);
  return (
    <div className="WeatherInfo fade-in">
      <div className="content">
        <div className="row align-items-center gy-4 main-layout">
          {/* LEFT */}
          <div className="col-12 col-lg-6">
            <div className="weather-info-content">
              <div className="location-icon">
                <MapPin size={50} strokeWidth={2.3} />
              </div>

              <div className="weather-side-info">
                <div>
                  <h1 className="city-name">
                    {" "}
                    <span>{props.data.city}</span>
                  </h1>
                </div>

                <div>
                  <ul className="weather-meta">
                    <li>
                      <FormattedDate
                        date={props.data.date}
                        timezone={props.data.timezone}
                      />
                    </li>
                    <li>
                      {props.data.description.charAt(0).toUpperCase() +
                        props.data.description.slice(1)}{" "}
                      in {props.data.city}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-12 col-lg-6">
            <div className="main-weather-card">
              <div className="row align-items-center">
                <div className="col-6 text-center">
                  <WeatherIcon
                    description={props.data.description}
                    icon={props.data.icon}
                    size={120}
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
          <div className="row  ">
            <div className="col-12 col-md-4">
              <div className="info-card feels-card">
                <div className="metric-icon">
                  <Thermometer size={58} strokeWidth={2} />
                </div>

                <div className="metric-content">
                  <div className="info-label">
                    <span>Feels like</span>
                  </div>
                  <div className="info-value">
                    {Math.round(props.data.feels_like)} °C
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="info-card humidity-card">
                <div className="metric-icon">
                  <Droplets size={58} strokeWidth={2} />
                </div>

                <div className="metric-content">
                  <div className="info-label">
                    <span>Humidity</span>
                  </div>
                  <div className="info-value">{props.data.humidity} %</div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="info-card wind-card">
                <div className="metric-icon">
                  <Wind size={58} strokeWidth={2} />
                </div>

                <div className="metric-content">
                  <div className="info-label">
                    <span>Wind</span>
                  </div>
                  <div className="info-value">{props.data.wind} km/h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WeatherForecast coordinates={props.data.coordinates} />
      </div>
    </div>
  );
}

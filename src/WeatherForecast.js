import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast({ coordinates }) {
  const [forecast, setForecast] = useState(null);

  const latitude = coordinates?.latitude;
  const longitude = coordinates?.longitude;

  useEffect(() => {
    if (latitude === undefined || longitude === undefined) {
      return;
    }

    const apiKey = "ec00aa08afab6385c60b468o5877e14t";

    const apiUrl =
      `https://api.shecodes.io/weather/v1/forecast` +
      `?lon=${longitude}` +
      `&lat=${latitude}` +
      `&key=${apiKey}` +
      `&units=metric`;

    setForecast(null);

    axios
      .get(apiUrl)
      .then((response) => {
        setForecast(response.data.daily);
      })
      .catch((error) => {
        console.error("Error loading forecast:", error);
      });
  }, [latitude, longitude]);

  if (!forecast || forecast.length === 0) {
    return <div className="WeatherForecast">Loading forecast...</div>;
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        {forecast.slice(0, 5).map((dailyForecast, index) => {
          return (
            <div className="col" key={dailyForecast.time}>
              {index === 0 ? (
                <div className="FormattedDate">Today</div>
              ) : (
                <FormattedDate date={dailyForecast.time} short />
              )}

              <WeatherIcon
                description={dailyForecast.condition.description}
                icon={dailyForecast.condition.icon_url}
                size={60}
              />

              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-temperature-max">
                  {Math.round(dailyForecast.temperature.maximum)}°
                </span>

                <span className="weather-forecast-temperature-min">
                  {Math.round(dailyForecast.temperature.minimum)}°
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

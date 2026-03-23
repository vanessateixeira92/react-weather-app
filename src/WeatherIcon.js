import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

import sunnyAnimation from "./animations/sunny.json";
import partlyCloudyAnimation from "./animations/partly_cloudy.json";
import cloudyAnimation from "./animations/cloudy.json";
import rainAnimation from "./animations/rain.json";
import snowAnimation from "./animations/snow.json";
import stormAnimation from "./animations/storm.json";
import fogAnimation from "./animations/fog.json";
import windyAnimation from "./animations/windy.json";
import clearNightAnimation from "./animations/clear_night.json";

export default function WeatherIcon(props) {
  if (!props.description) {
    return null;
  }

  const description = props.description.toLowerCase();
  const icon = props.icon ? props.icon.toLowerCase() : "";

  const isNight = icon.includes("night");

  const map = {
    clear: isNight ? clearNightAnimation : sunnyAnimation,
    few: partlyCloudyAnimation,
    broken: cloudyAnimation,
    overcast: cloudyAnimation,
    rain: rainAnimation,
    snow: snowAnimation,
    thunder: stormAnimation,
    fog: fogAnimation,
    mist: fogAnimation,
    wind: windyAnimation,
  };

  const key = Object.keys(map).find((k) => description.includes(k));

  const animation =
    map[key] || (isNight ? clearNightAnimation : sunnyAnimation);

  return (
    <Player autoplay loop src={animation} style={{ height: 120, width: 120 }} />
  );
}

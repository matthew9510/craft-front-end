import React from "react";
import type {WeatherData} from "../interview-space/InterviewSpace";
import {CardWrapper} from "./weather-card.styles";

export default function WeatherCard(props: {
  weatherData: WeatherData;
  imperial: boolean;
}): JSX.Element {
  return (
    <CardWrapper>
      <h3>Today&apos;s Weather</h3>
      <p>{props.weatherData.date}</p>
      <p>{props.weatherData.city}</p>
      <p>
        {props.weatherData.temperature}{" "}
        {props.imperial ? <span>f</span> : <span>c</span>}
      </p>
      <p>{props.weatherData.weatherDescription}</p>
    </CardWrapper>
  );
}

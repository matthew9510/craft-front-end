import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import WeatherCard from "../../../components/weather-card";
import type {WeatherData} from "../../../components/interview-space/InterviewSpace";

const weatherData: WeatherData = {
  date: "2023-11-28",
  temperature: 20,
  weatherDescription: "Sunny 🌞",
  city: "San Diego",
};
describe("WeatherCard", () => {
  test("WeatherCard is present when props are passed", () => {
    render(<WeatherCard weatherData={weatherData} imperial={false} />);
    const weatherCard = screen.getByTestId("weather-card");
    expect(weatherCard).toBeInTheDocument();
  });

  test("WeatherCard is presenting data in imperial mode", () => {
    render(<WeatherCard weatherData={weatherData} imperial={true} />);
    const weatherCard = screen.getByTestId("weather-card");
    expect(weatherCard).toHaveTextContent("f");
  });
});

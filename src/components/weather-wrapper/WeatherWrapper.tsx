import React from "react";
import WeatherForm from "../weather-form/WeatherForm";
import WeatherCard from "../weather-card/WeatherCard";

export interface WeatherData {
  weatherDescription: string;
  temperature: number;
  date: string;
  city: string;
}

const weatherData: WeatherData[] = [
  {
    date: "2023-11-28",
    temperature: 20,
    weatherDescription: "Sunny 🌞",
    city: "San Diego",
  },
  {
    date: "2023-11-29",
    temperature: 22,
    weatherDescription: "Cloudy",
    city: "San Diego",
  },
  {
    date: "2023-11-30",
    temperature: 18,
    weatherDescription: "Rainy",
    city: "San Diego",
  },
  {
    date: "2023-12-01",
    temperature: 20,
    weatherDescription: "Sunny",
    city: "San Diego",
  },
  {
    date: "2023-12-02",
    temperature: 22,
    weatherDescription: "Cloudy",
    city: "San Diego",
  },
  {
    date: "2023-12-03",
    temperature: 18,
    weatherDescription: "Rainy",
    city: "San Diego",
  },
  {
    date: "2023-11-28",
    temperature: 18,
    weatherDescription: "Rainy",
    city: "San Francisco",
  },
]; // rather than a list containing multiple cities, we could construct a hash map of cities to weather data

const WeatherWrapper: React.FC = () => {
  // - [x] data
  // - [x] form for city and zip
  // - [x] 1 day forcast
  // Table of 10 day forecast

  const [city, setCity] = React.useState("");
  const [imperial, setImperial] = React.useState(false);
  //   const filteredWEatherData = weatherData.filter()

  React.useEffect(() => {
    console.log("city", city);
    console.log("imperial", imperial);
    console.log("weatherData", weatherData);
  }, [city, imperial]);

  return (
    <div>
      <WeatherForm setCity={setCity} setImperial={setImperial} />
      <WeatherCard weatherData={weatherData[0]} imperial={imperial} />
      {/* 10 day forcast based on city selected  */}
    </div>
  );
};

export default WeatherWrapper;

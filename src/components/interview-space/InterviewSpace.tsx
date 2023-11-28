import React from "react";
import WeatherForm from "../weather-form/WeatherForm";

interface WeatherData {
  weatherDescription: string;
  temperature: number;
  date: string;
  city: string;
}

const weatherData: WeatherData[] = [
  {
    date: "2023-11-28",
    temperature: 20,
    weatherDescription: "Sunny",
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
];

export default function InterviewSpace(): JSX.Element {
  // - [x] data
  // form for city and zip
  // 1 day forcast
  // Table of 10 day forecast

  const [city, setCity] = React.useState("");
  const [imperial, setImperial] = React.useState(false);

  const handleSetCity = (city: string): void => {
    setCity(city);
  };

  const handleSetImperial = (imperial: boolean): void => {
    setImperial(!imperial);
  };

  React.useEffect(() => {
    console.log("city", city);
    console.log("imperial", imperial);
    console.log("weatherData", weatherData);
  }, [city, imperial]);

  return (
    <div>
      <WeatherForm setCity={handleSetCity} setImperial={handleSetImperial} />
      {/* // pass data to card */}
    </div>
  );
}

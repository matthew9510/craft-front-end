import React from "react";

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

  return <div>InterviewSpace</div>;
}

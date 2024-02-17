import { useEffect, useState } from "react";
import { OpenWeather } from "../types";
import { getCurrentWeather } from "../services/OpenWeather.service";

export interface WeatherState {
  current: Partial<OpenWeather.CurrentWeather>;
  setLocation: (lat: number, lon: number) => void
}

export default function (): WeatherState {
  const [currentWeather, setCurrentWeather] = useState(
    {} as OpenWeather.CurrentWeather,
  );

  useEffect(() => {
    getCurrentWeather(7.8833, -72.5053).then((res) => setCurrentWeather(res));
  }, []);

  return {
    current: currentWeather,
    setLocation(lat, lon) {
      getCurrentWeather(lat, lon).then((res) => setCurrentWeather(res));
    }
  };
}

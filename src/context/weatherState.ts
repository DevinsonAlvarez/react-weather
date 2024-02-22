import { useEffect, useState } from "react";
import { CurrentWeather, Location } from "../types";
import {
  getCityGeolocation,
  getCurrentWeather,
} from "../services/OpenWeather.service";

export interface WeatherState {
  current: Partial<CurrentWeather>;
  setLocation: (location: Location) => void;
}

export default function (): WeatherState {
  const [currentWeather, setCurrentWeather] = useState({} as CurrentWeather);

  useEffect(() => {
    const location: Location | null = localStorage.getItem("prefer_location")
      ? JSON.parse(localStorage.getItem("prefer_location")!)
      : null;

    if (location) {
      getCurrentWeather(location.lat, location.lon).then((res) =>
        setCurrentWeather(res),
      );
    } else {
      const onProvideLocation = (position: GeolocationPosition) => {
        getCityGeolocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }).then((res) =>
          localStorage.setItem("prefer_location", JSON.stringify(res[0])),
        );
      };

      const onRejectLocation = () => {
        getCurrentWeather(7.8833, -72.5053).then((res) =>
          setCurrentWeather(res),
        );
      };

      navigator.geolocation.getCurrentPosition(
        onProvideLocation,
        onRejectLocation,
      );
    }
  }, []);

  return {
    current: currentWeather,
    setLocation(location) {
      getCurrentWeather(location.lat, location.lon).then((res) => {
        setCurrentWeather(res);
        localStorage.setItem("prefer_location", JSON.stringify(location));
      });
    },
  };
}

import { Icon } from "@iconify/react";
import { getCurrentWeather } from "../services/OpenWeather.service";
import { useEffect, useState } from "react";
import { OpenWeather } from "../types";

function CurrentWeather() {
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState(
    {} as OpenWeather.CurrentWeatherResponse,
  );

  useEffect(() => {
    getCurrentWeather("Cúcuta").then((data) => {
      setWeather(data);
      setIsLoading(false);
    });
  }, []);

  console.log(weather);

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="h-40 w-40">
        <Icon icon="meteocons:clear-day-fill" fontSize="10rem" />
      </div>
      <h3 className="text-6xl">
        {isLoading ? (
          <Icon icon="svg-spinners:3-dots-fade" />
        ) : (
          `${Math.round(weather.main.temp)}º`
        )}
      </h3>
      <div className="mt-4 flex items-center text-lg">
        <span className="mr-4 text-lg">
          {isLoading ? (
            <Icon icon="svg-spinners:3-dots-fade" />
          ) : (
            `min ${Math.round(weather.main.temp_min)}º`
          )}
        </span>
        <span className="text-lg">
          {isLoading ? (
            <Icon icon="svg-spinners:3-dots-fade" className="text-xl" />
          ) : (
            `max ${Math.round(weather.main.temp_max)}º`
          )}
        </span>
      </div>
    </div>
  );
}

export default CurrentWeather;

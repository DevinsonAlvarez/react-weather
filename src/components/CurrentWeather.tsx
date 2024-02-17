import { Icon } from "@iconify/react";
import { useContext } from "react";
import { AppContext } from "../context/state";

function CurrentWeather() {
  const { weather } = useContext(AppContext);

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="h-40 w-40">
        <Icon icon="meteocons:clear-day-fill" fontSize="10rem" />
      </div>
      <h3 className="text-6xl">
        {weather.current?.main ? (
          `${Math.round(weather.current.main.temp)}º`
        ) : (
          <Icon icon="svg-spinners:3-dots-fade" />
        )}
      </h3>
      <div className="mt-4 flex items-center text-lg">
        <span className="mr-4 text-lg">
          {weather.current?.main ? (
            `min ${Math.round(weather.current.main.temp_min)}º`
          ) : (
            <Icon icon="svg-spinners:3-dots-fade" />
          )}
        </span>
        <span className="text-lg">
          {weather.current?.main ? (
            `max ${Math.round(weather.current.main.temp_max)}º`
          ) : (
            <Icon icon="svg-spinners:3-dots-fade" />
          )}
        </span>
      </div>
    </div>
  );
}

export default CurrentWeather;

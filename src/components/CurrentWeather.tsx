import { Icon } from "@iconify/react";
import { useContext } from "react";
import { AppContext } from "../context/state";
import WeatherIcon from "./ui/WeatherIcon";

function CurrentWeather() {
  const { weather } = useContext(AppContext);

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="h-40 w-40">
        {weather.current.weather ? (
          <WeatherIcon
            weatherId={weather.current.weather[0].id}
            fontSize="10rem"
          />
        ) : (
          <Icon
            icon="svg-spinners:3-dots-fade"
            fontSize="5rem"
            className="m-auto"
          />
        )}
      </div>
      <h3 className="text-xl">
        {weather.current.weather ? (
          weather.current.weather[0].main
        ) : (
          <Icon icon="svg-spinners:3-dots-fade" />
        )}
      </h3>
      <h3 className="text-6xl">
        {weather.current.main ? (
          `${Math.round(weather.current.main.temp)}º`
        ) : (
          <Icon icon="svg-spinners:3-dots-fade" />
        )}
      </h3>
      <div className="mt-4 flex items-center text-lg">
        <span className="mr-4 text-lg">
          {weather.current.main ? (
            `min ${Math.round(weather.current.main.temp_min)}º`
          ) : (
            <Icon icon="svg-spinners:3-dots-fade" />
          )}
        </span>
        <span className="text-lg">
          {weather.current.main ? (
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

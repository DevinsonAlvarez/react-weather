import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/state";
import { type Forecast } from "../types";
import { getForecast } from "../services/OpenWeather.service";
import WeatherIcon from "./ui/WeatherIcon";
import { Icon } from "@iconify/react/dist/iconify.js";

function Forecast() {
  const { weather } = useContext(AppContext);
  const currentWeather = weather.current;

  const [forecast, setForecast] = useState<Forecast>({});

  useEffect(() => {
    if (currentWeather.coord) {
      getForecast(currentWeather.coord.lat, currentWeather.coord.lon).then(
        (res) => setForecast(res),
      );
    }
  }, [currentWeather]);

  const formatter = new Intl.DateTimeFormat("en-US", {
    hour12: true,
    hour: "numeric",
  });

  return (
    <div className="flex h-[calc(100%-2rem)] flex-nowrap gap-4 overflow-x-scroll px-4 py-2">
      {forecast.list ? (
        forecast.list.map((prediction) => (
          <div
            key={prediction.dt}
            className="flex w-28 flex-shrink-0 flex-col items-center justify-evenly rounded-xl bg-white/20"
          >
            <div className="text-3xl">{Math.round(prediction.main.temp)}º</div>
            <div>
              <WeatherIcon
                weatherId={prediction.weather[0].id}
                fontSize="7rem"
              />
            </div>
            <span className="text-lg">
              {formatter.format(prediction.dt * 1000)}
            </span>
          </div>
        ))
      ) : (
        <Icon
          icon="svg-spinners:3-dots-fade"
          fontSize="7rem"
          className="m-auto"
        />
      )}
    </div>
  );
}

export default Forecast;

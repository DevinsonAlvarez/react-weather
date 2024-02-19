export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

/**
 * Clouds %
 */
export interface Clouds {
  all: number;
}

export interface Coord {
  /** Longitude of the location */
  lon: number;
  /** Latitude of the location */
  lat: number;
}

export interface CurrentWeather {
  /** Internal parameter */
  base: string;
  clouds: Clouds;
  /** Internal parameter */
  cod: number;
  coord: Coord;
  /** Time of data calculation, unix, UTC */
  dt: number;
  /** City id */
  id: number;
  main: MainCurrentWeather;
  /** City name */
  name: string;
  rain?: Rain;
  snow?: Snow;
  sys: CurrentWeatherSys;
  timezone: number;
  /** Visibility, meter. The maximum value of the visibility is 10 km */
  visibility: number;
  weather: Weather[];
  wind: Wind;
}

/**
 * Internal information about the weather
 */
export interface CurrentWeatherSys {
  /** Internal parameter */
  type: number;
  /** Internal parameter */
  id: number;
  /** Country code (GB, JP, etc) */
  country: string;
  /** Sunrise time, unix, UTC */
  sunrise: number;
  /** Sunset time, unix, UTC */
  sunset: number;
}

export interface Forecast {
  /** Internal parameter */
  cod: string;
  /** Internal parameter */
  message: number;
  /** A number of timestamps returned in the API response */
  cnt: number;
  /** List of predictions */
  list: Prediction[];
  city: City;
}

export interface Location {
  name: string;
  country: string;
  lat: number;
  lon: number;
  local_names: { [key: string]: string };
}

export interface MainCurrentWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  /** Atmospheric pressure on the sea level, hPa */
  sea_level: number;
  /** Atmospheric pressure on the ground level, hPa */
  grnd_level: number;
}

export interface MainPrediction extends MainCurrentWeather {
  /** Internal parameter */
  temp_kf: number;
}

export interface Prediction {
  clouds: Clouds;
  dt_txt: string;
  /** Time of data forecasted, unix, UTC */
  dt: number;
  main: MainPrediction;
  /**
   * Probability of precipitation.
   *
   * The values of the parameter vary between 0 and 1,
   * where 0 is equal to 0%, 1 is equal to 100%
   */
  pop: number;
  rain?: Rain;
  snow?: Snow;
  sys: {
    /** Part of the day (n - night, d - day) */
    pod: "d" | "n"
  };
  /** Visibility, meter. The maximum value of the visibility is 10 km */
  visibility: number;
  weather: Weather[];
  wind: Wind;
}

/**
 * Rain volume for the las 1 hour/3 hour (where available), mm,
 */
export type Rain = { "1h": number } | { "3h": number };

/**
 * Snow volume for the las 1 hour/3 hour (where available), mm,
 */
export type Snow = { "1h": number } | { "3h": number };

export interface Weather {
  /**
   * Weather condition id
   *
   * - Thunderstorm 2xx
   * - Drizzle 3xx
   * - Rain 5xx
   * - Snow 6xx
   * - Atmosphere 7xx
   * - Clouds 8xx
   *   - Clear 800
   */
  id: number;
  main: string;
  description: string;
  icon: WeatherIcon;
}

/**
 * Icons with d are day icons and n are night icons
 *
 * URL is https://openweathermap.org/img/wn/10d@2x.png
 */
export type WeatherIcon =
  | "1d"
  | "2d"
  | "3d"
  | "4d"
  | "9d"
  | "10d"
  | "11d"
  | "13d"
  | "50d"
  | "1n"
  | "2n"
  | "3n"
  | "4n"
  | "9n"
  | "10n"
  | "11n"
  | "13n"
  | "50n";

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export namespace OpenWeather {
  export interface CurrentWeather {
    base: string;
    clouds: Clouds;
    cod: number;
    coord: Coord;
    dt: number;
    id: number;
    main: Main;
    name: string;
    rain?: Rain;
    snow?: Snow;
    sys: Sys;
    timezone: number;
    visibility: number;
    weather: Weather[];
    wind: Wind;
  }

  export interface Clouds {
    all: number;
  }

  export interface Coord {
    lon: number;
    lat: number;
  }

  export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  }

  export type Rain = { "1h": number } | { "3h": number };

  export type Snow = { "1h": number } | { "3h": number };

  export interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  }

  export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }

  export interface Wind {
    speed: number;
    deg: number;
    gust: number;
  }

  export interface Location {
    name: string;
    country: string;
    lat: number;
    lon: number;
    local_names: { [key: string]: string }
  }
}

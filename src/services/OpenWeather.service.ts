import { CurrentWeather, Forecast, Location } from "../types";

const API_KEY = "70ff3ea28d83f9cd9f4a2537fca81f99";

const BASE_URL = `https://api.openweathermap.org`;

function getApiUrl() {
  const apiUrl = new URL(BASE_URL);
  apiUrl.searchParams.append("appid", API_KEY);
  apiUrl.searchParams.append("units", "metric");
  apiUrl.searchParams.append(
    "lang",
    localStorage.getItem("lang") || navigator.language,
  );

  return apiUrl;
}

export async function getCityGeolocation(
  location: string | { lat: number; lon: number } = "",
  limit: number = 10,
): Promise<Location[]> {
  const uri = getApiUrl();
  uri.pathname += "geo/1.0/direct";
  uri.searchParams.append("limit", limit.toString());

  if (typeof location === "object") {
    uri.searchParams.append("lat", location.lat.toString());
    uri.searchParams.append("lon", location.lon.toString());
  } else {
    uri.searchParams.append("q", location);
  }

  const res = await fetch(uri);

  return res.json();
}

export async function getCurrentWeather(
  lat: number,
  lon: number,
): Promise<CurrentWeather> {
  const uri = getApiUrl();
  uri.pathname += "data/2.5/weather";
  uri.searchParams.append("lat", lat.toString());
  uri.searchParams.append("lon", lon.toString());

  const res = await fetch(uri);

  return res.json();
}

export async function getForecast(
  lat: number,
  lon: number,
  limit: number = 5,
): Promise<Forecast> {
  const uri = getApiUrl();
  uri.pathname += "data/2.5/forecast";
  uri.searchParams.append("lat", lat.toString());
  uri.searchParams.append("lon", lon.toString());
  uri.searchParams.append("cnt", limit.toString());

  const res = await fetch(uri);

  return res.json();
}

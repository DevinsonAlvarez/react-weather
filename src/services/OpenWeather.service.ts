import { OpenWeather } from "../types";

const API_KEY = "70ff3ea28d83f9cd9f4a2537fca81f99";

const BASE_URL = `https://api.openweathermap.org`;

function getApiUrl() {
  const apiUrl = new URL(BASE_URL);
  apiUrl.searchParams.append("appid", API_KEY);
  apiUrl.searchParams.append("units", "metric");

  return apiUrl;
}

export async function getCityGeolocation(city: string = "", limit: number = 10) {
  const uri = getApiUrl();
  uri.pathname += "geo/1.0/direct";
  uri.searchParams.append("q", city);
  uri.searchParams.append("limit", limit.toString());

  const res = await fetch(uri);

  return res.json();
}

export async function getCurrentWeather(
  lat: number,
  lon: number
): Promise<OpenWeather.CurrentWeather> {
  const uri = getApiUrl();
  uri.pathname += "data/2.5/weather";
  uri.searchParams.append('lat', lat.toString());
  uri.searchParams.append('lon', lon.toString());

  const res = await fetch(uri);

  return res.json();
}

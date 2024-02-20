import { createContext } from "react";
import { WeatherState } from "./weatherState";
import { UiState } from "./uiState";

export interface AppState {
  weather: WeatherState;
  ui: UiState;
  lang: string;
  setLang: (lang: string) => void;
}

export const AppContext = createContext({} as AppState);

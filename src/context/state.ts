import { createContext } from "react";
import { SidebarState } from "./sidebarState";
import { WeatherState } from "./weatherState";

export interface AppState {
  sidebar: SidebarState;
  weather: WeatherState;
}

export const AppContext = createContext({} as AppState);

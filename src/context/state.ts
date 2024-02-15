import { createContext } from "react";
import { SidebarState } from "./sidebarState";

export interface AppState {
  sidebar: SidebarState;
}

export const AppContext = createContext({} as AppState);

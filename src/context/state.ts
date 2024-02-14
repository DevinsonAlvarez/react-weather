import { createContext } from "react";

export interface AppState {
  openSidebar: boolean;
  toggleSidebar: () => void;
}

export const AppContext = createContext({} as AppState);


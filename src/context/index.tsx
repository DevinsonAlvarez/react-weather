import { type ReactNode } from "react";
import { AppContext } from "./state";
import sidebarState from "./sidebarState";
import weatherState from "./weatherState";

function AppProvider({ children }: { children: ReactNode }) {
  const sidebar = sidebarState();
  const weather = weatherState();

  return (
    <AppContext.Provider value={{ sidebar, weather }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;

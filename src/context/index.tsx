import { type ReactNode } from "react";
import { AppContext } from "./state";
import sidebarState from "./sidebarState";

function AppProvider({ children }: { children: ReactNode }) {
  const sidebar = sidebarState();

  return (
    <AppContext.Provider value={{ sidebar }}>{children}</AppContext.Provider>
  );
}

export default AppProvider;

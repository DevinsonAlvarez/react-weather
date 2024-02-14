import { type ReactNode, useState } from "react";
import { AppContext } from "./state";

function AppProvider({ children }: { children: ReactNode }) {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => setOpenSidebar((open) => !open);

  return (
    <AppContext.Provider value={{ openSidebar, toggleSidebar }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;

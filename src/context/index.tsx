import { useState, type ReactNode } from "react";
import { AppContext } from "./state";
import weatherState from "./weatherState";
import uiState from "./uiState";

function AppProvider({ children }: { children: ReactNode }) {
  const weather = weatherState();
  const ui = uiState();
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || navigator.language,
  );

  return (
    <AppContext.Provider
      value={{
        weather,
        ui,
        lang: language,
        setLang(lang) {
          setLanguage(lang);
          localStorage.setItem("lang", lang);
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;

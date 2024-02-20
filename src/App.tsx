import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ChangeLocation from "./components/ChangeLocation";
import ChangeLanguage from "./components/ChangeLanguage";
import { useContext } from "react";
import { AppContext } from "./context/state";

function App() {
  const { ui, lang } = useContext(AppContext);

  const date = new Date();
  const formatter = new Intl.DateTimeFormat(lang, {
    day: "numeric",
    month: "long",
  });
  const formattedDate = formatter.format(date);

  return (
    <div className="relative m-auto flex h-screen min-h-[600px] max-w-lg flex-col px-2 pb-2 pt-10">
      <Navbar />

      {ui.sidebar.isOpen && <Sidebar />}
      {ui.locationPanel.isOpen && <ChangeLocation />}
      {ui.languagePanel.isOpen && <ChangeLanguage />}

      <CurrentWeather />

      {/* forecast container */}
      <div className="h-2/3 max-h-[350px] rounded-xl bg-white/20 shadow-lg">
        {/* date */}
        <div className="flex h-8 items-center justify-between px-4">
          <span>{formattedDate}</span>
          <span>{date.getFullYear()}</span>
        </div>

        <Forecast />
      </div>
    </div>
  );
}

export default App;

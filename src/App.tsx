import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="relative m-auto flex h-screen min-h-[600px] max-w-lg flex-col pt-10">
      <Navbar />

      <Sidebar />

      <CurrentWeather />

      {/* forecast container */}
      <div className="h-3/4 rounded-xl border-t border-white/10 bg-white/5 backdrop-blur">
        {/* date */}
        <div className="flex h-8 items-center justify-between px-4">
          <span>today</span>
          <span>Jan, 5</span>
        </div>
        {/* forecasts */}
        <div className="flex h-[calc(100%-2rem)] flex-nowrap gap-4 overflow-x-scroll py-2">
          <div>{/* space */}</div>

          {[1, 2, 3, 4, 5].map((num) => (
            <Forecast key={num} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

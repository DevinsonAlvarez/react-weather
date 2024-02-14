import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-full min-h-screen">
      <Navbar />
      {/* app container */}
      <div className="m-auto flex h-screen min-h-[600px] max-w-lg flex-col border-2 border-black pt-10">
        <CurrentWeather />

        {/* forecast container */}
        <div className="h-3/4 border-4 border-green-500">
          {/* date */}
          <div className="flex h-8 items-center justify-between border-2 border-yellow-500 px-4">
            <span>today</span>
            <span>date</span>
          </div>
          {/* forecasts */}
          <div className="flex h-[calc(100%-2rem)] flex-nowrap gap-4 overflow-x-scroll border-2 border-violet-500">
            <div>{/* space */}</div>

            {[1, 2, 3, 4, 5].map((num) => (
              <Forecast key={num} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

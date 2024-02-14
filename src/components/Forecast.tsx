import { Icon } from "@iconify/react/dist/iconify.js";

function Forecast() {
  return (
    <div className="flex w-24 flex-shrink-0 flex-col items-center justify-evenly">
      <div className="text-3xl">15º</div>
      <div>
        <Icon icon="meteocons:clear-day-fill" className="text-8xl" />
      </div>
      <span className="text-xl">03:00 pm</span>
    </div>
  );
}

export default Forecast;

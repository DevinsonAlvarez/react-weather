import { Icon } from "@iconify/react/dist/iconify.js";

function Forecast() {
  return (
    <div className="flex w-24 flex-shrink-0 flex-col items-center justify-evenly border border-rose-500">
      <div className="border border-black text-3xl">15º</div>
      <div className="border border-black">
        <Icon icon="meteocons:clear-day-fill" className="text-8xl" />
      </div>
      <span className="border border-black text-xl">03:00 pm</span>
    </div>
  );
}

export default Forecast;

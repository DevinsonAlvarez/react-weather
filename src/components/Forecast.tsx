import { Icon } from "@iconify/react/dist/iconify.js";

function Forecast() {
  return (
    <div className="flex w-28 flex-shrink-0 flex-col items-center justify-evenly rounded-xl bg-white/20">
      <div className="text-3xl">15º</div>
      <div>
        <Icon icon="meteocons:clear-day-fill" className="text-[7rem]" />
      </div>
      <span className="text-lg">03:00 pm</span>
    </div>
  );
}

export default Forecast;

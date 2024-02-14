import { Icon } from "@iconify/react";

function CurrentWeather() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 border-2 border-blue-500">
      <div className="h-40 w-40 border border-black">
        <Icon icon="meteocons:clear-day-fill" fontSize="10rem" />
      </div>
      <h3 className="border border-lime-500 text-6xl">15º</h3>
      <div className="border border-amber-500">
        <span className="mr-4 text-lg">min: grades</span>
        <span>max: grades</span>
      </div>
    </div>
  );
}

export default CurrentWeather;

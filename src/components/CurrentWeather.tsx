import { Icon } from "@iconify/react";

function CurrentWeather() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="h-40 w-40">
        <Icon icon="meteocons:clear-day-fill" fontSize="10rem" />
      </div>
      <h3 className="text-6xl">15º</h3>
      <div className="mt-4 text-lg">
        <span className="mr-4 text-lg">min 12º</span>
        <span>max 15º</span>
      </div>
    </div>
  );
}

export default CurrentWeather;

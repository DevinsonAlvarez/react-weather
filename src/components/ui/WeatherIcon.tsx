import { Icon } from "@iconify/react/dist/iconify.js";

interface Props {
  weatherId: number | null;
  fontSize?: string;
}

function WeatherIcon({ weatherId, fontSize }: Props) {
  let iconName = "meteocons:clear-day-fill";

  if (weatherId) {
    if (/^2[0-9]{2}$/.test(weatherId.toString())) {
      iconName = "meteocons:thunderstorms-fill";
    } else if (/^3[0-9]{2}$/.test(weatherId.toString())) {
      iconName = "meteocons:drizzle-fill";
    } else if (/^511$/.test(weatherId.toString())) {
      iconName = "meteocons:snow-fill";
    } else if (/^52[0-9]$/.test(weatherId.toString())) {
      iconName = "meteocons:raindrop-fill";
    } else if (/^53[0-9]$/.test(weatherId.toString())) {
      iconName = "meteocons:raindrop-fill";
    } else if (/^5[0-9]{2}$/.test(weatherId.toString())) {
      iconName = "meteocons:raindrop-fill";
    } else if (/^6[0-9]{2}$/.test(weatherId.toString())) {
      iconName = "meteocons:snowflake-fill";
    } else if (/^7[0-9]{2}$/.test(weatherId.toString())) {
      iconName = "meteocons:mist-fill";
    } else if (/^800$/.test(weatherId.toString())) {
      iconName = "meteocons:clear-day-fill";
    } else if (/^8[0-9]{2}$/.test(weatherId.toString())) {
      iconName = "meteocons:cloudy-fill";
    }
  }

  return <Icon icon={iconName} fontSize={fontSize} />;
}

export default WeatherIcon;

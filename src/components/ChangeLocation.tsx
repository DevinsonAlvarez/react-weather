import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "./ui/Button";
import { useEffect, useState } from "react";
import { getCityGeolocation } from "../services/OpenWeather.service";
import { OpenWeather } from "../types";
import useDebounce from "../hooks/useDebounce";

interface Props {
  open: boolean;
  onClose: () => void;
}

function ChangeLocation({ open, onClose }: Props) {
  const [search, setSearch] = useState("");
  const [locations, setLocations] = useState<OpenWeather.Location[]>([]);
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    if (debouncedSearch.length >= 3) {
      getCityGeolocation(debouncedSearch).then((res) => setLocations(res));
    } else {
      setLocations([]);
    }

    return () => {};
  }, [debouncedSearch]);

  return (
    <div
      className={`fixed left-0 top-0 z-10 h-screen w-full p-2 backdrop-blur-sm ${open ? "visible" : "hidden"}`}
    >
      <search className="m-auto h-full w-full max-w-lg rounded-xl bg-white/20 p-4">
        <label
          htmlFor="searchLocation"
          className="mb-6 flex items-center justify-center"
        >
          <Button onClick={onClose}>
            <Icon icon="line-md:close-small" className="text-2xl" />
          </Button>
          <input
            type="search"
            className="w-full rounded-xl px-2 py-0.5 text-lg text-black"
            placeholder="Search City"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <section>
          <ul className="flex h-full flex-col gap-2 overflow-y-scroll text-xl">
            {locations.map((location) => (
              <li
                key={`${location.lat}-${location.lon}`}
                className="rounded-xl bg-white/20 p-2"
              >
                {location.name}, {location.country}
              </li>
            ))}
          </ul>
        </section>
      </search>
    </div>
  );
}

export default ChangeLocation;

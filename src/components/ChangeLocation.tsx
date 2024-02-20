import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "./ui/Button";
import { useContext, useEffect, useState } from "react";
import { Location } from "../types";
import { getCityGeolocation } from "../services/OpenWeather.service";
import useDebounce from "../hooks/useDebounce";
import { AppContext } from "../context/state";

function ChangeLocation() {
  const { weather, ui } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [locations, setLocations] = useState<Location[]>([]);
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
    <div className="fixed left-0 top-0 z-10 h-screen w-full p-2">
      <search className="m-auto h-full w-full max-w-lg rounded-xl bg-white/30 p-4 shadow-lg backdrop-blur">
        <label
          htmlFor="searchLocation"
          className="mb-6 flex items-center justify-center"
        >
          <Button onClick={ui.locationPanel.close}>
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
            {locations.map((location, i) => (
              <React.Fragment key={i}>
                <li>
                  <Button
                    className="w-full bg-black/10 shadow hover:bg-black/20 active:bg-black/30"
                    onClick={() => {
                      weather.setLocation(location.lat, location.lon);
                      ui.locationPanel.close();
                      setSearch("");
                    }}
                  >
                    {location.name}, {location.country}
                  </Button>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </section>
      </search>
    </div>
  );
}

export default ChangeLocation;

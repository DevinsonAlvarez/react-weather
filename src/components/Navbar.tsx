import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "./ui/Button";
import { useContext } from "react";
import { AppContext } from "../context/state";

function Navbar() {
  const { weather, ui } = useContext(AppContext);

  return (
    <div className="absolute left-0 top-0 flex min-h-10 w-full items-center justify-between rounded-b-xl bg-white/20 px-4 shadow-lg">
      <Button onClick={ui.sidebar.open}>
        <Icon icon="line-md:menu" className="text-2xl" />
      </Button>
      <Button onClick={ui.locationPanel.open}>
        {weather.current ? (
          weather.current.name
        ) : (
          <Icon icon="svg-spinners:3-dots-fade" />
        )}
      </Button>
    </div>
  );
}

export default Navbar;

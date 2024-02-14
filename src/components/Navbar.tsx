import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext } from "react";
import { AppContext } from "../context/state";

function Navbar() {
  const { toggleSidebar } = useContext(AppContext);

  return (
    <div className="absolute left-0 top-0 flex min-h-10 w-full items-center justify-between rounded-b-xl border border-white/10 bg-white/5 bg-gradient-to-t from-sky-300 px-4 backdrop-blur">
      <button onClick={toggleSidebar}>
        <Icon icon="line-md:menu" className="text-4xl" />
      </button>
      <button className="text-lg">London, UK</button>
    </div>
  );
}

export default Navbar;

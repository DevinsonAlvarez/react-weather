import { Icon } from "@iconify/react/dist/iconify.js";
import useSidebar from "../hooks/useSidebar";

function Navbar() {
  const { open: openSidebar } = useSidebar();

  return (
    <div className="absolute left-0 top-0 flex min-h-10 w-full items-center justify-between rounded-b-xl bg-white/20 px-4">
      <button onClick={openSidebar}>
        <Icon icon="line-md:menu" className="text-3xl" />
      </button>
      <button className="text-lg">London, UK</button>
    </div>
  );
}

export default Navbar;

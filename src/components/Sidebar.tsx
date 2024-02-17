import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "./ui/Button";
import { useContext } from "react";
import { AppContext } from "../context/state";

function Sidebar() {
  const { sidebar } = useContext(AppContext);

  return (
    <div
      onClick={sidebar.close}
      className={`fixed left-0 top-0 z-10 h-screen w-full backdrop-blur-sm ${sidebar.isOpen ? "visible" : "hidden"}`}
    >
      <div className="absolute left-0 top-0 h-screen w-60">
        <div className="h-full w-full rounded-r-xl bg-white/20">
          <div className="flex items-center justify-between px-4">
            <h3 className="p-2 text-xl">React Weather</h3>
            <Button onClick={sidebar.close}>
              <Icon icon="line-md:close-small" className="text-2xl" />
            </Button>
          </div>
          <ul className="flex h-full flex-col gap-2 overflow-y-scroll p-4 text-lg">
            <li className="rounded-xl bg-white/20 p-2">item</li>
            <li className="rounded-xl bg-white/20 p-2">item</li>
            <li className="rounded-xl bg-white/20 p-2">item</li>
            <li className="rounded-xl bg-white/20 p-2">item</li>
            <li className="rounded-xl bg-white/20 p-2">item</li>
            <li className="rounded-xl bg-white/20 p-2">item</li>
            <li className="rounded-xl bg-white/20 p-2">item</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

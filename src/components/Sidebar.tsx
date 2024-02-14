import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext } from "react";
import { AppContext } from "../context/state";

function Sidebar() {
  const { openSidebar, toggleSidebar } = useContext(AppContext);

  return (
    <>
      {/* backdrop */}
      {openSidebar && (
        <div
          onClick={toggleSidebar}
          className={`fixed left-0 top-0 z-10 h-screen w-full backdrop-blur-sm transition-transform duration-200`}
        ></div>
      )}
      <div
        className={`fixed left-0 top-0 z-20 h-screen w-60 transition-transform duration-300 ${openSidebar ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="h-full w-full border border-white/35 bg-cyan-200/30 backdrop-blur">
          <div className="flex items-center pl-2">
            <button>
              <Icon
                icon="line-md:menu"
                className="text-3xl"
                onClick={toggleSidebar}
              />
            </button>
            <h3 className="p-2 text-2xl">React Weather</h3>
          </div>
          <ul className="flex h-full flex-col gap-2 overflow-y-scroll p-4 text-lg">
            <li className="rounded-xl border border-white/10 p-2 backdrop-blur">
              item
            </li>
            <li className="rounded-xl border border-white/10 p-2 backdrop-blur">
              item
            </li>
            <li className="rounded-xl border border-white/10 p-2 backdrop-blur">
              item
            </li>
            <li className="rounded-xl border border-white/10 p-2 backdrop-blur">
              item
            </li>
            <li className="rounded-xl border border-white/10 p-2 backdrop-blur">
              item
            </li>
            <li className="rounded-xl border border-white/10 p-2 backdrop-blur">
              item
            </li>
            <li className="rounded-xl border border-white/10 p-2 backdrop-blur">
              item
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

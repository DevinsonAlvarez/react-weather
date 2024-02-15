import { Icon } from "@iconify/react/dist/iconify.js";
import useSidebar from "../hooks/useSidebar";

function Sidebar() {
  const { isOpen, close } = useSidebar();

  return (
    <div
      onClick={close}
      className={`fixed left-0 top-0 z-10 h-screen w-full backdrop-blur-sm ${isOpen ? "visible" : "hidden"}`}
    >
      <div className="absolute left-0 top-0 h-screen w-60">
        <div className="h-full w-full rounded-r-xl bg-white/30 backdrop-blur">
          <div className="flex items-center justify-between px-4">
            <h3 className="p-2 text-2xl">React Weather</h3>
            <button onClick={close}>
              <Icon icon="line-md:close-small" className="text-3xl" />
            </button>
          </div>
          <ul className="flex h-full flex-col gap-2 overflow-y-scroll p-4 text-lg">
            <li className="rounded-xl bg-white/30 p-2">item</li>
            <li className="rounded-xl bg-white/30 p-2">item</li>
            <li className="rounded-xl bg-white/30 p-2">item</li>
            <li className="rounded-xl bg-white/30 p-2">item</li>
            <li className="rounded-xl bg-white/30 p-2">item</li>
            <li className="rounded-xl bg-white/30 p-2">item</li>
            <li className="rounded-xl bg-white/30 p-2">item</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

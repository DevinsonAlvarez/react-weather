import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "./ui/Button";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/state";

function Sidebar() {
  const { ui } = useContext(AppContext);

  useEffect(() => {
    if (!ui.sidebar.isOpen) {
      ui.languagePanel.close();
    }
  }, [ui.sidebar.isOpen, ui]);

  return (
    <div className="fixed left-0 top-0 z-10 h-screen w-full">
      <div className="absolute left-0 top-0 h-screen w-60">
        <div className="h-full w-full rounded-r-xl bg-white/30 shadow-lg backdrop-blur">
          <div className="flex items-center justify-between">
            <h3 className="p-2 text-xl">React Weather</h3>
            <Button onClick={ui.sidebar.close}>
              <Icon icon="line-md:close-small" className="text-2xl" />
            </Button>
          </div>
          <ul className="flex h-full flex-col gap-2 overflow-y-scroll p-2 text-lg">
            <li>
              <Button
                className="w-full bg-black/10 shadow hover:bg-black/20 active:bg-black/30"
                onClick={() => {
                  ui.languagePanel.open();
                  ui.sidebar.close();
                }}
              >
                Language
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

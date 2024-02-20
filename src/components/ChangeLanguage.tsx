import { useContext } from "react";
import { AppContext } from "../context/state";
import Button from "./ui/Button";
import { Icon } from "@iconify/react/dist/iconify.js";

function ChangeLanguage() {
  const { ui, setLang } = useContext(AppContext);

  return (
    <div className="fixed left-0 top-0 z-10 flex h-screen w-full items-center justify-center p-2">
      <div className="h-full w-full overflow-hidden rounded-xl bg-white/20 shadow-lg backdrop-blur">
        <div className="flex w-full items-center justify-between">
          <h6 className="ml-2 text-xl font-semibold">Change Language</h6>
          <Button onClick={ui.languagePanel.close}>
            <Icon icon="line-md:close-small" className="text-2xl" />
          </Button>
        </div>
        <ul className="flex h-full flex-col gap-4 p-4">
          <li>
            <Button
              className="w-full bg-black/10 shadow hover:bg-black/20 active:bg-black/30"
              onClick={() => {
                setLang("en");
                ui.locationPanel.close();
                location.reload();
              }}
            >
              English
            </Button>
          </li>
          <li>
            <Button
              className="w-full bg-black/10 shadow hover:bg-black/20 active:bg-black/30"
              onClick={() => {
                setLang("es");
                ui.locationPanel.close();
                location.reload();
              }}
            >
              Spanish
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ChangeLanguage;

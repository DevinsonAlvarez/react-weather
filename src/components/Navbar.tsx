import { Icon } from "@iconify/react/dist/iconify.js";
import useSidebar from "../hooks/useSidebar";
import Button from "./ui/Button";

interface Props {
  onOpenLocationPanel: () => void;
}

function Navbar({ onOpenLocationPanel }: Props) {
  const { open: openSidebar } = useSidebar();

  return (
    <div className="absolute left-0 top-0 flex min-h-10 w-full items-center justify-between rounded-b-xl bg-white/20 px-4">
      <Button onClick={openSidebar}>
        <Icon icon="line-md:menu" className="text-2xl" />
      </Button>
      <Button className="text-lg" onClick={onOpenLocationPanel}>
        London, UK
      </Button>
    </div>
  );
}

export default Navbar;

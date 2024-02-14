import { Icon } from "@iconify/react/dist/iconify.js";

function Navbar() {
  return (
    <div className="fixed left-0 top-0 flex min-h-10 w-full items-center justify-between px-4">
      <button>
        <Icon icon="line-md:menu" className="text-4xl" />
      </button>
      <button className="text-lg">location</button>
    </div>
  );
}

export default Navbar;

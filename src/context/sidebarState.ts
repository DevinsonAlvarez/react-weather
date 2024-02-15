import { useState } from "react";

export interface SidebarState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export default (): SidebarState => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return {
    isOpen: openSidebar,
    open() {
      setOpenSidebar(true);
    },
    close() {
      setOpenSidebar(false);
    },
  };
};

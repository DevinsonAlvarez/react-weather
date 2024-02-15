import { useContext } from "react";
import { AppContext } from "../context/state";
import { SidebarState } from "../context/sidebarState";

function useSidebar(): SidebarState {
  const { sidebar } = useContext(AppContext);

  return sidebar;
}

export default useSidebar;

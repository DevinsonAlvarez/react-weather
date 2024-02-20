import { useState } from "react";

export interface UiState {
  sidebar: {
    isOpen: boolean;
    close: () => void;
    open: () => void;
  };
  locationPanel: {
    isOpen: boolean;
    close: () => void;
    open: () => void;
  };
  languagePanel: {
    isOpen: boolean;
    close: () => void;
    open: () => void;
  };
}

export default function (): UiState {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);

  return {
    sidebar: {
      isOpen: openSidebar,
      open() {
        setOpenSidebar(true);
      },
      close() {
        setOpenSidebar(false);
      },
    },
    locationPanel: {
      isOpen: openLocation,
      open() {
        setOpenLocation(true);
      },
      close() {
        setOpenLocation(false);
      },
    },
    languagePanel: {
      isOpen: openLanguage,
      open() {
        setOpenLanguage(true);
      },
      close() {
        setOpenLanguage(false);
      },
    },
  };
}

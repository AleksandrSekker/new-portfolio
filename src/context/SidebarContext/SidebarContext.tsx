"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface SidebarContextProps {
  isOpen: boolean;
  handleOpenState: (state: boolean) => void;
  isHovered: boolean;
  handleHoverState: (isHovered: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextProps>({
  isOpen: false,
  handleOpenState: () => {},
  isHovered: false,
  handleHoverState: () => {},
});

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenState = (state: boolean) => {
    setIsOpen(state);
  };
  const handleHoverState = (state: boolean) => {
    setIsHovered(state);
  };

  return (
    <SidebarContext.Provider
      value={{ isOpen, handleOpenState, isHovered, handleHoverState }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
export const useSidebar = () => useContext(SidebarContext);

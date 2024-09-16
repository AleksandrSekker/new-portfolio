"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextProps {
  isModalOpen: boolean;
  handleModalState: (state: boolean) => void;
}

export const ModalContext = createContext<ModalContextProps>({
  isModalOpen: false,
  handleModalState: () => {},
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalState = (state: boolean) => {
    setIsModalOpen(state);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, handleModalState }}>
      {children}
    </ModalContext.Provider>
  );
};
export const useModal = () => useContext(ModalContext);

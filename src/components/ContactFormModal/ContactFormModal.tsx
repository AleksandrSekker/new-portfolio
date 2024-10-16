"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { ContactForm, Overlay, ThankYouModal } from "@/components";
import { useModal } from "@/context/ModalContext/ModalContext";
export const ContactFormModal = () => {
  const { isModalOpen, handleModalState } = useModal();
  const [isSub, setIsSub] = useState(false);

  const desktopModalRef = useRef<HTMLDivElement | null>(null);
  const mobileModalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        (!desktopModalRef.current ||
          !desktopModalRef.current.contains(e.target as Node)) &&
        (!mobileModalRef.current ||
          !mobileModalRef.current.contains(e.target as Node))
      ) {
        handleModalState(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleModalState, isModalOpen]);
  const handleModalStateOpposite = () => {
    handleModalState(!isModalOpen);
  };
  const handleSubState = (isModal: boolean) => setIsSub(isModal);

  return (
    <>
      {isModalOpen && <Overlay />}
      <AnimatePresence>
        <motion.div
          ref={desktopModalRef}
          className={clsx(
            "fixed z-55 h-full max-h-fit max-w-full p-4 overflow-y-auto rounded bg-white  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
            "md:max-w-[813px]",
            "md:block",
            "hidden",
          )}
          initial={{
            x: "-50%",
            y: "-100%",
            opacity: 0,
            zIndex: 55,
          }}
          animate={{
            x: isModalOpen ? "-50%" : "-50%",
            y: isModalOpen ? "-50%" : "300%",
            opacity: isModalOpen ? 1 : 0,
            transition: { duration: 0.7 },
          }}
        >
          <ContactForm
            setCloseModal={handleModalStateOpposite}
            handleSubState={handleSubState}
          />
        </motion.div>
        <motion.div
          ref={mobileModalRef}
          className={clsx(
            "fixed z-55 h-full max-h-fit w-full p-4 overflow-y-auto rounded bg-white  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",

            "md:hidden",
            "block",
          )}
          initial={{
            x: "-50%",
            y: "-100%",
            opacity: 0,
            zIndex: 99,
          }}
          animate={{
            x: isModalOpen ? "-50%" : "-50%",
            y: isModalOpen ? "-50%" : "300%",
            opacity: isModalOpen ? 1 : 0,
            transition: { duration: 0.7 },
          }}
        >
          <ContactForm
            setCloseModal={handleModalStateOpposite}
            handleSubState={handleSubState}
          />
        </motion.div>
      </AnimatePresence>
      {isSub && <ThankYouModal />}
    </>
  );
};

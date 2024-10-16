import { useModal } from "@/context/ModalContext/ModalContext";
import { useStep } from "@/context/StepProvider/StepProvider";
import { AnimatePresence, motion } from "framer-motion";
import { routes } from "@/constants/general";
import { Button, StyledLink } from "@/components";
import { SidebarProps } from "@/components/types";

export const Sidebar = ({ isOpen, handleSidebarState }: SidebarProps) => {
  const { currentStep, handleStepChange } = useStep();
  const { handleModalState } = useModal();

  return (
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed min-h-screen min-w-full w-full flex overflow-hidden bg-gradient-to-b from-foreground-dark to-foreground-light z-[51] flex-col justify-center top-[68px]">
          <div className="container mx-auto">
            <motion.div
              className="flex flex-col mx-auto max-w-[233px]"
              initial={{
                opacity: 0,
                y: -100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              exit={{
                opacity: 0,
                y: -100,
              }}
            >
              {routes.map((link) => (
                <StyledLink
                  key={link.stepIndex}
                  currentStep={currentStep}
                  thisStep={link.stepIndex}
                  handleStepChange={handleStepChange}
                  handleSidebarState={handleSidebarState}
                  linkText={link.linkText}
                />
              ))}
              <div className="flex flex-col mt-[90px] gap-[9px]">
                <Button
                  label={"Write message"}
                  onClick={() => {
                    handleModalState(true);
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      ) : null}
    </AnimatePresence>
  );
};

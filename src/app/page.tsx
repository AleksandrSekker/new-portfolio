"use client";

import HomeScreen from "@/screens/Home/HomeScreen";
import { aboutData, homeData } from "@/constants/general";
import AboutScreen from "@/screens/About/AboutScreen";
import ProjectsScreen from "@/screens/Projects/ProjectsScreen";
import ContactScreen from "@/screens/Contacts/ContactScreen";
import SkillsScreen from "@/screens/Skills/SkillsScreen";
import { useCallback, useEffect, useState } from "react";
import { useStep } from "@/context/StepProvider/StepProvider";
import { AnimatePresence, motion } from "framer-motion";
import { Stepper } from "@/components/Stepper/Stepper";

const { firstName, subTitle, jobTitle } = homeData;
const { title, body } = aboutData;
const components = [
  <HomeScreen
    firstName={firstName}
    jobTitle={jobTitle}
    subTitle={subTitle}
    key={0}
  />,
  <AboutScreen title={title} body={body} key={1} />,
  <ProjectsScreen key={2} />,
  <SkillsScreen key={3} />,
  <ContactScreen key={4} />,
];

export default function Home() {
  const { currentStep, handleStepChange, previousStep } = useStep();
  const [scrollLock, setScrollLock] = useState(false);

  const handleScroll = useCallback(
    (e: { deltaY: number }) => {
      if (scrollLock) return;

      setScrollLock(true);
      setTimeout(() => setScrollLock(false), 2200);

      const newStep = currentStep + (e.deltaY > 0 ? 1 : -1);
      if (newStep >= 0 && newStep < components.length) {
        setTimeout(() => {
          handleStepChange(newStep);
        }, 0);
      }
    },
    [currentStep, handleStepChange, scrollLock],
  );

  const handleSwipe = useCallback(
    (direction: string) => {
      if (scrollLock) return;

      const newStep = currentStep + (direction === "down" ? 1 : -1);
      if (newStep >= 0 && newStep < components.length) {
        setScrollLock(true);
        setTimeout(() => {
          handleStepChange(newStep);
          setScrollLock(false);
        }, 0);
      }
    },
    [currentStep, handleStepChange, scrollLock],
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("keyup", (e) => {
      if (e.key === "ArrowUp") {
        handleSwipe("up");
      } else if (e.key === "ArrowDown") {
        handleSwipe("down");
      }
    });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll, handleSwipe]);
  return (
    <AnimatePresence mode="wait" initial={true}>
      <motion.div
        key={currentStep}
        onAnimationComplete={() => setScrollLock(false)}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onDrag={(event, info) => {
          if (info.offset.y > 30) handleSwipe("up");
          else if (info.offset.y < -30) handleSwipe("down");
        }}
        initial={{
          y: currentStep < previousStep ? "-25%" : "25%",
        }}
        animate={{
          y: "0%",
          opacity: [0, 1],
        }}
        exit={{
          y: currentStep < previousStep ? "25%" : "-25%",
          opacity: [1, 0],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        {components[currentStep]}
      </motion.div>
      <Stepper activeStep={currentStep} setActiveStep={handleStepChange} />
    </AnimatePresence>
  );
}

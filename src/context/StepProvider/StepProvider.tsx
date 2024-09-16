"use client";
import { createContext, useContext, useState } from "react";

interface IContextProps {
  currentStep: number;
  previousStep: number;
  handleStepChange: (step: number) => void;
}

const StepContext = createContext<IContextProps>({
  currentStep: 0,
  previousStep: 0,
  handleStepChange: () => {},
});

export function StepProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);

  const handleStepChange = (step: number) => {
    setPreviousStep(currentStep); // Update previousStep before updating currentStep
    setCurrentStep(step);
  };

  return (
    <StepContext.Provider
      value={{ currentStep, handleStepChange, previousStep }}
    >
      {children}
    </StepContext.Provider>
  );
}
export const useStep = () => useContext(StepContext);

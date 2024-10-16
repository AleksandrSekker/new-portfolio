import { Meta, StoryFn } from "@storybook/react";
import { Stepper } from "@/components";
import { StepProvider } from "@/context/StepProvider/StepProvider";
import { StepperProps } from "@/components/types";
import React from "react";

const meta = {
  title: "Component/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    setActiveStep: () => {},
  },
} satisfies Meta<typeof Stepper>;

export default meta;

const Template: StoryFn<StepperProps> = (args: StepperProps) => {
  return (
    <StepProvider>
      <Stepper {...args} />
    </StepProvider>
  );
};
export const StepperComponent = Template.bind({});
StepperComponent.args = {
  activeStep: 0,
};

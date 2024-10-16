import type { Meta, StoryObj } from "@storybook/react";
import Slider from "@/components/Slider/Slider";

const meta = {
  title: "Component/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SliderComponent: Story = {
  args: {},
};

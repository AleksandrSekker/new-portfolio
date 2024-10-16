import type { Meta, StoryObj } from "@storybook/react";
import { CardWrapper } from "@/components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Component/CardWrapper",
  component: CardWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CardWrapperComponent: Story = {
  args: {
    children: `title`,
  },
};

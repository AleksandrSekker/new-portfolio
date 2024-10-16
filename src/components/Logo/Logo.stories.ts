import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "@/components";

const meta = {
  title: "Layout/Logo-Website",
  component: Logo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WebsiteLogo: Story = {
  args: {},
};

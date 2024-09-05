import type { Meta, StoryObj } from "@storybook/react";
import ThemeSwitch from "./ThemeSwitch";

const meta = {
  title: "Component/Switch",
  component: ThemeSwitch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof ThemeSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SwitchWebsiteTheme: Story = {
  args: {},
};

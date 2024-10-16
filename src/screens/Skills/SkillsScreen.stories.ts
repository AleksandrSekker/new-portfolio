import type { Meta, StoryObj } from "@storybook/react";
import SkillsScreen from "@/screens/Skills/SkillsScreen";

const meta = {
  title: "Screens/Skills",
  component: SkillsScreen,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof SkillsScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SkillsPage: Story = {
  args: {},
};

import type { Meta, StoryObj } from "@storybook/react";
import ProjectsScreen from "@/screens/Projects/ProjectsScreen";

const meta = {
  title: "Screens/Projects",
  component: ProjectsScreen,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof ProjectsScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProjectsPage: Story = {
  args: {},
};

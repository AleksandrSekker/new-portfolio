import type { Meta, StoryObj } from "@storybook/react";
import { aboutData } from "@/constants/general";
import AboutScreen from "@/screens/About/AboutScreen";
import ProjectsScreen from "@/screens/Projects/ProjectsScreen";
import ContactScreen from "@/screens/Contacts/ContactScreen";

const meta = {
  title: "Screens/Contacts",
  component: ContactScreen,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof ContactScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContactPage: Story = {
  args: {},
};

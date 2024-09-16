import type { Meta, StoryObj } from "@storybook/react";
import { aboutData } from "@/constants/general";
import AboutScreen from "@/screens/About/AboutScreen";

const meta = {
  title: "Screens/About",
  component: AboutScreen,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof AboutScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AboutPage: Story = {
  args: {
    title: aboutData.title,
    body: aboutData.body,
  },
};

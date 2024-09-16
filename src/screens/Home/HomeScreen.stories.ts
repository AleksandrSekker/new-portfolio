import type { Meta, StoryObj } from "@storybook/react";
import HomeScreen from "@/screens/Home/HomeScreen";
import { homeData } from "@/constants/general";

const meta = {
  title: "Screens/Home",
  component: HomeScreen,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof HomeScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HomePage: Story = {
  args: {
    firstName: homeData.firstName,
    jobTitle: homeData.jobTitle,
    subTitle: homeData.subTitle,
  },
};

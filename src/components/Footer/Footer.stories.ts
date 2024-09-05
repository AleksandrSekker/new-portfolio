import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Footer from "./Footer";
import { links } from "@/constants/general";

const meta = {
  title: "Layout/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterMain: Story = {
  args: {
    firstName: "John",
    lastName: "Doe",
    linksArray: links,
  },
};

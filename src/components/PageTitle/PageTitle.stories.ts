import type { Meta, StoryObj } from "@storybook/react";
import { PageTitle } from "@/components";

const meta = {
  title: "Component/PageTitle",
  component: PageTitle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageTitleComponent: Story = {
  args: {
    title: "Title",
  },
};

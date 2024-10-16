import type { Meta, StoryObj } from "@storybook/react";
import { AvatarImage } from "@/components";

const meta = {
  title: "Component/AvatarImage",
  component: AvatarImage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof AvatarImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AvatarImageComponent: Story = {
  args: {
    image: "/assets/Avatar.jpg",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { SkillItem } from "@/components";

const meta = {
  title: "Component/SkillItem",
  component: SkillItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof SkillItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SkillItemComponent: Story = {
  args: {
    text: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
  },
};

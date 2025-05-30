import type { Meta, StoryObj } from "@storybook/react";
import Header from "../components/Header/index";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  decorators: [
  ],
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};

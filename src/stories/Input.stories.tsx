import type { Meta, StoryObj } from "@storybook/react";
import Input from "../components/Input/index";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  decorators: [
  ],
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        title: 'Input novo'
    }
};

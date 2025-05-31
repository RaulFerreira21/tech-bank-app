import type { Meta, StoryObj } from "@storybook/react";
import Balance from "../components/Balance/index";

const meta: Meta<typeof Balance> = {
  title: "Components/Balance",
  component: Balance,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 600, padding: 12, background: "#222" }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Balance>;

export const Default: Story = {};

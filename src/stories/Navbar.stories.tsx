import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "../components/Navbar/index";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', marginLeft: '-480px' }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};

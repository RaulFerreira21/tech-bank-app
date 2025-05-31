import type { Meta, StoryObj } from "@storybook/react";
import Footer from "../components/Footer/index";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', padding: 12, background: "#222" }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};

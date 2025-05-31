import type { Meta, StoryObj } from "@storybook/react";
import Content from "../components/Content/index";

const meta: Meta<typeof Content> = {
  title: "Components/Content",
  component: Content,
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

type Story = StoryObj<typeof Content>;

export const Default: Story = {};

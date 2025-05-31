import type { Meta, StoryObj } from "@storybook/react";
import Title from "../components/Title/index";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
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

type Story = StoryObj<typeof Title>;

export const Default: Story = {
    args: {
        title: 'Título do card'
    }
};

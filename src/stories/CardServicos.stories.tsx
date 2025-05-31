import type { Meta, StoryObj } from "@storybook/react";
import CardServicos from "../components/CardServicos/index";

const meta: Meta<typeof CardServicos> = {
  title: "Components/CardServicos",
  component: CardServicos,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 12, border: '1px solid black' }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof CardServicos>;

export const Default: Story = {};

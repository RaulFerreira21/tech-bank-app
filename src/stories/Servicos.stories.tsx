import type { Meta, StoryObj } from "@storybook/react";
import Servicos from "../components/Servicos/index";

const meta: Meta<typeof Servicos> = {
  title: "Components/Servicos",
  component: Servicos,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', border: '1px solid black' }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Servicos>;

export const Default: Story = {};

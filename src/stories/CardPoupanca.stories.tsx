import type { Meta, StoryObj } from "@storybook/react";
import CardPoupanca from "../components/CardPoupanca/index";

const meta: Meta<typeof CardPoupanca> = {
  title: "Components/CardPoupanca",
  component: CardPoupanca,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 600, padding: 12, background: "#222", color: 'white' }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof CardPoupanca>;

export const Default: Story = {
};

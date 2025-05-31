import type { Meta, StoryObj } from "@storybook/react";
import CardInvestimentos from "../components/CardInvestimentos/index";

const meta: Meta<typeof CardInvestimentos> = {
  title: "Components/CardInvestimentos",
  component: CardInvestimentos,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 600, padding: 12, border: '1px solid black' }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof CardInvestimentos>;

export const Default: Story = {};

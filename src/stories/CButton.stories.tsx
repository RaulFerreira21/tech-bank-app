import type { Meta, StoryObj } from "@storybook/react";
import CButton from "../components/CButton/index";

const meta: Meta<typeof CButton> = {
  title: "Components/CButton",
  component: CButton,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{  padding: 12 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof CButton>;

export const Default: Story = {
    args: {
        text: 'Botao Doc',
        color: 'secondary'
    }
};

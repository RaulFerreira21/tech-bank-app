import type { Meta, StoryObj } from "@storybook/react";
import ButtonServices from "../components/ButtonServices/index";
import ReceiptIcon from "@mui/icons-material/Receipt";

const meta: Meta<typeof ButtonServices> = {
  title: "Components/ButtonServices",
  component: ButtonServices,
  parameters: {
    layout: "centered",
  },
  decorators: [
  ],
};
export default meta;

type Story = StoryObj<typeof ButtonServices>;

export const Default: Story = {
    
    args: {
        label: 'Saldo',
        icon: <ReceiptIcon/>,
        color: 'primary',
        size: 'large'

    }

};

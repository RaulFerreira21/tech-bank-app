import type { Meta, StoryObj } from "@storybook/react";
import CardComponents from "../components/CardComponents/index";
import { Button } from "@mui/material";

const meta: Meta<typeof CardComponents> = {
  title: "Components/CardComponents",
  component: CardComponents,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{padding: 12 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof CardComponents>;

export const Default: Story = {
    args: {
        title: 'Titulo do Card',
        children: (
            <div>
                <p>Conteúdo do card é um clindren</p>
                <p>Podemos passar aqui dentro um conteúdo de texto, algun JSX ou até mesmo outro componente</p>
                <Button>botao</Button>
            </div>
        )
    }
};

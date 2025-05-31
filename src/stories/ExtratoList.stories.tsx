import type { Meta, StoryObj } from "@storybook/react";
import ExtratoList from "../components/ExtratoList/index";
import ReceiptIcon from "@mui/icons-material/Receipt"
const meta: Meta<typeof ExtratoList> = {
  title: "Components/ExtratoList",
  component: ExtratoList,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof ExtratoList>;

export const Default: Story = {
    args: {itens: [
        {
            id: 2,
            tipo: 'Pagamento',
            descricao: 'Pagamento de boleto',
            horario: '14:30',
            valor: 3114,
            icone: <ReceiptIcon/>,
            data: '2024-05-31',
            conta: 'conta-corrente'
        },
        {
            id: 3,
            tipo: 'Depósito',
            descricao: 'Depósito em conta',
            horario: '10:00',
            valor: 3234,
            icone: <ReceiptIcon/>,
            data: '2025-05-30',
            conta: 'conta-corrente'
        }
    ]}
};

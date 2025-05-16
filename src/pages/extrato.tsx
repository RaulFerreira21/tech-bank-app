"use client"

import ExtratoList from "../components/ExtratoList";
import LanguageIcon from "@mui/icons-material/Language";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StorefrontIcon from '@mui/icons-material/Storefront';

const dados = [
  {
    id: 1,
    tipo: "Boleto Bancário",
    descricao: "CLARO",
    horario: "10:30",
    valor: "-20,00 R$",
    icone: <LanguageIcon />,
    data: "2025-05-16",
  },
  {
    id: 2,
    tipo: "Compra Online",
    descricao: "Amazon",
    horario: "12:00",
    valor: "-150,00 R$",
    icone: <StorefrontIcon />,
    data: "2025-05-15",
  },
  {
    id: 3,
    tipo: "Depósito",
    descricao: "Banco XYZ",
    horario: "09:00",
    valor: "+500,00 R$",
    icone: <AttachMoneyIcon />,
    data: "2025-05-14",
  },
];

export default function Extrato() {
  return <ExtratoList itens={dados} />;
}

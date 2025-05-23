"use client";

import ExtratoList from "../components/ExtratoList";
import LanguageIcon from "@mui/icons-material/Language";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Title from "@/components/Title";
import { Box } from "@mui/material";

const dados = [
  {
    id: 1,
    tipo: "Boleto Bancário",
    descricao: "CLARO",
    horario: "10:30",
    valor: -20,
    icone: <LanguageIcon sx={{ fontSize: 32 }} />,
    data: "2025-05-18",
  },
  {
    id: 2,
    tipo: "Compra Online",
    descricao: "Mercado Livre",
    horario: "21:00",
    valor: -23.69,
    icone: <StorefrontIcon sx={{ fontSize: 32 }} />,
    data: "2025-05-17",
  },
  {
    id: 3,
    tipo: "Depósito",
    descricao: "Banco XYZ",
    horario: "12:00",
    valor: 500,
    icone: <AttachMoneyIcon sx={{ fontSize: 32 }} />,
    data: "2025-05-14",
  },
  {
    id: 4,
    tipo: "Compra Online",
    descricao: "Amazon",
    horario: "12:00",
    valor: -150,
    icone: <StorefrontIcon sx={{ fontSize: 32 }} />,
    data: "2025-05-15",
  },
  {
    id: 5,
    tipo: "Compra Online",
    descricao: "iFood",
    horario: "20:00",
    valor: -39.59,
    icone: <StorefrontIcon sx={{ fontSize: 32 }} />,
    data: "2025-05-15",
  }
];

export default function Extrato() {
  return (
    <>
      <Title title="Extrato da conta-corrente" />
      <Box
        sx={{
          height: "auto",
          display: "flex",
          justifyContent: "center", 
          alignItems: "center",
        }}
      >
        <ExtratoList itens={dados}></ExtratoList>
      </Box>
    </>
  );
}

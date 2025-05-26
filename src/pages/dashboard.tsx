"use client"

import ButtonServices from "@/components/ButtonServices"
import { Box } from "@mui/material"
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange"
import ReceiptIcon from "@mui/icons-material/Receipt"
import CardComponents from "@/components/CardComponents"
import CardServicos from "@/components/CardServicos"
import Link from "next/link"
import { CardInvestimentos } from "@/components/CardInvestimentos"
import CardPoupanca from "@/components/CardPoupanca"

export default function Dashboard() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          py: 5,
          px: 20,
          justifyContent: "space-evenly",
          borderBottom: "1px solid #454545",
          color: "#ffffff",
        }}
      >
        <Link href="/transferir" className="navigationLink">
          <ButtonServices
            icon={<CurrencyExchangeIcon fontSize="large" />}
            label="Transferir"
            color="info"
          />
        </Link>

        <Link href="/boleto" className="navigationLink">
          <ButtonServices
            icon={<ReceiptIcon fontSize="large" />}
            label="Pagar Boleto"
            color="info"
          />
        </Link>
      </Box>
      <CardComponents title="Poupança">
        <CardPoupanca />
      </CardComponents>
      <CardComponents title="Investimentos">
        <CardInvestimentos />
      </CardComponents>

      <CardComponents title="Outros Serviços">
        <CardServicos />
      </CardComponents>
    </>
  )
}

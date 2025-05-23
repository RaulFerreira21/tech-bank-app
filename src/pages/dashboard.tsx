"use client"

import Button from "@/components/CButton"
import ButtonServices from "@/components/ButtonServices"
import { Card, Container } from "@mui/material"
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SavingsIcon from '@mui/icons-material/Savings';
import CardComponents from "@/components/CardComponents";

export default function Dashboard() {
  return (
    <Container>
      <Card>
        <ButtonServices icon='CurrencyExchangeIcon' label="Transferir"></ButtonServices>
        <ButtonServices icon='ReceiptIcon' label="Pagar Boleto"></ButtonServices>
        <ButtonServices icon='SavingsIcon' label="Depositar"></ButtonServices>
      </Card>
      <CardComponents />
    </Container>
  )
}

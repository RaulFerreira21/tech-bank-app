"use client";

import ButtonServices from "@/components/ButtonServices";
import { Box, Card, CardActions, CardContent, Container } from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SavingsIcon from "@mui/icons-material/Savings";

export default function Dashboard() {
  return (
    <Container>
      <Card
        sx={{
          backgroundColor: "#121212",
          padding: "20px",
          borderRadius: "inherit",
          borderBottom: "1px solid #454545",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            color: "#fff",
          }}
        >
          <ButtonServices
            icon={<CurrencyExchangeIcon fontSize="large" />}
            label="Transferir"
            color="info"
          ></ButtonServices>
          <ButtonServices
            icon={<ReceiptIcon fontSize="large" />}
            label="Pagar Boleto"
            color="info"
          ></ButtonServices>
          <ButtonServices
            icon={<SavingsIcon fontSize="large" />}
            label="Depositar"
            color="info"
          ></ButtonServices>
        </CardContent>
      </Card>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#121212",
          color: "white",
          borderBottom: "1px solid #454545",
          borderRadius: 0,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            color: "#fff",
          }}
        >
          
        </CardContent>
        <CardActions>

        </CardActions>
      </Card>
    </Container>
  );
}

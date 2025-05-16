"use client"

import Title from "@/components/Title"
import { Box, TextField, Typography } from "@mui/material"
import Button from "@/components/Button"
import { useState } from "react"

export default function Deposito() {
  const [contaDeposito, setContaDeposito] = useState("")

  function handleConta(conta: string) {
    setContaDeposito(conta)
  }

  return (
    <>
      <Title title="Realizar depósito" />

      <Box sx={{ p: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
          Qual valor deseja depositar?
        </Typography>

        <TextField
          fullWidth
          variant="standard"
          placeholder="R$"
          slotProps={{
            input: {
              disableUnderline: false,
            },
          }}
          sx={{ mb: 4 }}
        />

        <Box sx={{ mb: 4, width: "100%" }}>
          <Typography sx={{ mb: 1, fontWeight: "bold" }}>
            De qual conta vai sair esse valor?
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              justifyContent: "center",
            }}
          >
            <Button
              color={contaDeposito === "conta-corrente" ? "info" : "inherit"}
              text="conta-corrente"
              onClick={() => handleConta("conta-corrente")}
            />
            <Button
              color={contaDeposito === "conta-poupança" ? "info" : "inherit"}
              text="conta-poupança"
              onClick={() => handleConta("conta-poupança")}
            />
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button color="primary" text="Concluir" />
        </Box>
      </Box>
    </>
  )
}

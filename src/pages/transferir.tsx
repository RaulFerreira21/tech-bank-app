import Title from "@/components/Title";
import { Box, TextField, Typography } from "@mui/material";
import CButton from "@/components/CButton";
import { useState } from "react";

export default function Transferir() {
  const [contaDeposito, setContaDeposito] = useState("");

  function handleConta(conta: string) {
    setContaDeposito(conta);
  }

  return (
    <>
      <Title title="Realizar tranferência" />

      <Box sx={{ p: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
          {"Para quem deseja transferir?"}
        </Typography>
        <TextField
          fullWidth
          variant="standard"
          placeholder=""
          slotProps={{
            input: {
              disableUnderline: false,
            },
          }}
          sx={{ mb: 4 }}
        />

        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
          {"Qual valor você deseja depositar?"}
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
            <CButton
              color={contaDeposito === "conta-corrente" ? "info" : "inherit"}
              text="conta-corrente"
              onClick={() => handleConta("conta-corrente")}
            />
            <CButton
              color={contaDeposito === "conta-poupança" ? "info" : "inherit"}
              text="conta-poupança"
              onClick={() => handleConta("conta-poupança")}
            />
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <CButton color="primary" text="Concluir" />
        </Box>
      </Box>
    </>
  );
}

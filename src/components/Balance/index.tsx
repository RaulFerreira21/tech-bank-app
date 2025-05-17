"use client";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React from "react";

export default function Balance() {
  const balance = "R$ 7.000,00";
  const [showedBalance, setShowBalance] = React.useState(false);

  function handleShowBalance() {
    setShowBalance(!showedBalance);
  }

  return (
    <Box>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "transparent",
          color: "white",
          borderBottom: "1px solid #454545",
          borderRadius: 0,
        }}
      >
        <CardContent sx={{
          display: "flex"
        }}>
          <Typography variant="body2" sx={{ margin: "0 8px 0 0" }}>
            Saldo:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              filter: showedBalance ? "none" : "blur(6px)",
              transition: "filter 0.4s",
              userSelect: showedBalance ? "text" : "none",
            }}
          >
            {balance}
          </Typography>
          {showedBalance ? (
            <VisibilityOffIcon
              sx={{ color: "white", borderRadius: '10px', fontSize: "small", marginLeft: "10px", cursor: "pointer" }}
              onClick={handleShowBalance}
            />
          ) : (
            <VisibilityIcon
              sx={{ color: "white", fontSize: "larger", marginLeft: "10px", cursor: "pointer" }}
              onClick={handleShowBalance}
            />
          )}
        </CardContent>
        <CardActions>
          <Link href="/extrato" passHref>
            <Button size="small">
              <Typography variant="body2">Ver Extrato</Typography>
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}

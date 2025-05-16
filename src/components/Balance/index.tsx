"use client"

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material"
import Link from "next/link"
import VisibilityIcon from "@mui/icons-material/Visibility"
import React from "react"

export default function Balance() {
  const balance = "R$ 7.000,00"
  const [showedBalance, setShowBalance] = React.useState(false)

  function handleShowBalance() {
    setShowBalance(!showedBalance)
    console.log(showedBalance)
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
        <CardContent>
          <Typography variant="body2" sx={{ margin: "0 0 10px 0" }}>
            Saldo:
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="body2">{balance}</Typography>
            <VisibilityIcon
              sx={{ color: "white", marginLeft: "10px" }}
              onClick={handleShowBalance}
            />
          </Box>
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
  )
}

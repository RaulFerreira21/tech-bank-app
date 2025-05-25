"use client"

import { Box, Typography } from "@mui/material"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import Link from "next/link"
import { useState, useEffect } from "react"
import CButton from "../CButton"

export default function CardPoupanca() {
  const [showedBalance, setShowBalance] = useState(false)
  const [balance, setBalance] = useState<string>("R$ 0,00")

  function handleShowBalance() {
    setShowBalance(!showedBalance)
  }

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await fetch("http://localhost:3001/extrato")
        const data = await res.json()
        const total = data.reduce(
          (acc: number, item: { valor: number }) => acc + Number(item.valor),
          0
        )
        setBalance(
          total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
          })
        )
      } catch (error: any) {
        setBalance("R$ 0,00")
      }
    }

    fetchBalance()

    const interval = setInterval(fetchBalance, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            px: 4,
          }}
        >
          <Typography
            variant="h4"
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
              sx={{
                cursor: "pointer",
                fontSize: { xs: "20px", sm: "24px" },
              }}
              onClick={handleShowBalance}
            />
          ) : (
            <VisibilityIcon
              sx={{
                cursor: "pointer",
                fontSize: { xs: "20px", sm: "24px" },
              }}
              onClick={handleShowBalance}
            />
          )}
        </Box>

        <Link href="/deposito">
          <CButton color="primary" text="Depositar" />
        </Link>
      </Box>
    </>
  )
}

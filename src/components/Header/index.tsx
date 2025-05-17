"use client"

import { Box, Typography } from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import LogoutIcon from "@mui/icons-material/Logout"
import Link from "next/link"

export default function HeaderComponent() {
  const user: string = "userX"

  return (
    <Box
      component="header"
      sx={{
        bgcolor: "#236B7A",
        backgroundImage: 'linear-gradient(45deg, #12120F, transparent);',
        color: "#FAFAFA",
        width: "100%",
        height: "56px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px 0",
      }}
    >
      <Box component="nav" sx={{ display: "flex", alignItems: "center" }}>
        <AccountCircleIcon
          fontSize="medium"
          sx={{ marginRight: "5px", color: "white" }}
        />
        <Typography variant="h6">Olá, {user}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          listStyle: "none",
          color: "white",
          textDecoration: "none",
        }}
      >
        <Link className="navigationLink" href={"/"}>
          <Typography variant="body1">Ínicio</Typography>
        </Link>
        <Link className="navigationLink" href={"/dashboard"}>
          <Typography variant="body1">Dashboard</Typography>
        </Link>
        <Link className="navigationLink" href={"/extrato"}>
          <Typography variant="body1">Extrato</Typography>
        </Link>
         <Link className="navigationLink" href={"/deposito"}>
          <Typography variant="body1">Depósito</Typography>
        </Link>
        <Link className="navigationLink" href={"/dashboard"}>
          <Typography variant="body1">Transferir</Typography>
        </Link>
      </Box>
      <Box>
        <LogoutIcon></LogoutIcon>
      </Box>
    </Box>
  )
}

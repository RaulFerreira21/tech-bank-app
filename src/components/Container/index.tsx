"use client"

import Balance from "@/components/Balance"
import HeaderComponent from "@/components/Header"
import Home from "@/pages"
import { Container, Box } from "@mui/material"

export default function MainContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {true ? (
        <Home />
      ) : (
        <Container
          sx={{
            border: "1px solid #454545",
            height: "100vh",
            pr: 0,
            pl: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <HeaderComponent />
          <Balance />
          <Box sx={{ bgcolor: "#e8e8e8", flex: 1 }}>{children}</Box>
        </Container>
      )}
    </>
  )
}

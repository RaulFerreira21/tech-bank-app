"use client"

import Content from "@/components/Content"
import Navbar from "@/components/Navbar"
import { Box } from "@mui/material"

export default function Home() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(to bottom, #121212, #c6dce4)",
          paddingTop: "90px",
        }}
      >
        <Content />
      </Box>
    </>
  )
}

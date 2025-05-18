import { Box, Button } from "@mui/material"
import logo from "@/assets/logo.png"
import Image from "next/image";

export default function Navbar() {
  return (
    <Box
      sx={{
        bgcolor: "black",
        height: "90px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: "30px",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <Box sx={{ color: "white", fontWeight: "bold", fontSize: "24px" }}>
        <Image src={logo} alt="Logo Bytebank" width={150} />
      </Box>
      <Box>
        <Button sx={{ color: "white" }}>Sobre</Button>
        <Button sx={{ color: "white" }}>Serviços</Button>
      </Box>
    </Box>
  )
}

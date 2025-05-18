import { Box, Typography } from "@mui/material";
import Image from "next/image";
import contentImage from "@/assets/content_banner.png"

export default function Content() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        gap: "50px",
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ maxWidth: "400px" }}>
        <Typography
          variant="h5"
          sx={{ color: "white", fontWeight: "bold", marginBottom: "20px" }}
        >
          Experimente mais liberdade no controle da sua vida financeira.
          Crie sua conta com a gente!
        </Typography>
      </Box>
      <Box>
        <Image src={contentImage} alt="Imagem de conteúdo" width={400} />
      </Box>
    </Box>
  );
}

import { Container, Box } from "@mui/material";
import HeaderComponent from "./header.component";
import { ReactNode } from "react";

interface MainContainerProps{
    children: React.ReactNode
}

export default function MainContainer() {
  return (
    <Container sx={{ border: "1px solid #454545", height: "100vh", pr: 0, pl: 0 }}>
      <Box>
        <HeaderComponent />
      </Box>
    </Container>
  );
}

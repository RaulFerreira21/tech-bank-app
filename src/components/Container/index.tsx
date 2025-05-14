import { Container, Box } from '@mui/material'
import HeaderComponent from '../Header'

export default function MainContainer() {
  return (
    <Container
      sx={{ border: '1px solid #454545', height: '100vh', pr: 0, pl: 0 }}
    >
      <Box>
        <HeaderComponent />
      </Box>
    </Container>
  )
}

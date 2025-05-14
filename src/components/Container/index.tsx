import { Container, Box } from '@mui/material'
import HeaderComponent from '../Header'
import Balance from '../Balance'

export default function MainContainer() {
  return (
    <Container
      sx={{ border: '1px solid #454545', height: '100vh', pr: 0, pl: 0 }}
    >
      <Box>
        <HeaderComponent />
        <Balance></Balance>
      </Box>
    </Container>
  )
}

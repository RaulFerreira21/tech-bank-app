import Balance from '@/components/Balance'
import HeaderComponent from '@/components/Header'
import { Container, Box } from '@mui/material'

export default function MainContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Container
      sx={{ border: '1px solid #454545', height: '100vh', pr: 0, pl: 0 }}
    >
      <Box>
        <HeaderComponent />
        <Balance />
        {children}
      </Box>
    </Container>
  )
}

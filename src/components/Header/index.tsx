import { Box, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import Link from 'next/link'

export default function HeaderComponent() {
  const user: string = 'userX'

  return (
    <Box
      component="header"
      sx={{
        bgcolor: '#236B7A',
        color: '#FAFAFA',
        width: '100%',
        height: '56px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box component="nav" sx={{ display: 'flex', alignItems: 'center' }}>
        <AccountCircleIcon color="action" fontSize="large" />
        <Typography variant="h6">Olá, {user}</Typography>
        <Link href={'/dashboard'}>Teste</Link>
      </Box>
      <Box>
        <LogoutIcon></LogoutIcon>
      </Box>
    </Box>
  )
}

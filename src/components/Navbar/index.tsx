import { Box, Button } from '@mui/material';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import CButton from '../CButton';
import Link from 'next/link';

export default function Navbar() {
  return (
    <Box
      sx={{
        bgcolor: 'black',
        height: '90px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingX: '30px',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
      }}
    >
      <Box sx={{ display: 'flex', gap: 10, fontWeight: '600' }}>
        <Image src={logo} alt="Logo Bytebank" width={150} />
        <Box sx={{ color: '#236B7A' }}>
          <Button
            disableRipple
            sx={{ fontWeight: '600', textTransform: 'none', fontSize: '18px' }}
          >
            Sobre
          </Button>
          <Button
            disableRipple
            sx={{ fontWeight: '600', textTransform: 'none', fontSize: '18px' }}
          >
            Serviços
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <CButton
          text="Abrir minha conta"
          color="primary"
          sx={{ borderRadius: 1, textTransform: 'none' }}
        />
        <Link href="/dashboard">
          <CButton
            text="Já tenho conta"
            sx={{
              bgcolor: 'transparent',
              borderRadius: 1,
              border: '2px solid #236B7A',
              textTransform: 'none',
            }}
          />
        </Link>
      </Box>
    </Box>
  );
}

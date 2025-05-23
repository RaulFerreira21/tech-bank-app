import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import CButton from '../CButton';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        bgcolor: 'black',
        height: '90px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Image src={logo} alt="Logo Bytebank" width={150} />
      </Box>

      {!isMobile && (
        <Box sx={{ display: 'flex', gap: 4, color: '#236B7A' }}>
          <Button
            disableRipple
            sx={{
              fontWeight: '600',
              textTransform: 'none',
              fontSize: '18px',
            }}
          >
            Sobre
          </Button>
          <Button
            disableRipple
            sx={{
              fontWeight: '600',
              textTransform: 'none',
              fontSize: '18px',
            }}
          >
            Serviços
          </Button>
        </Box>
      )}

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {!isMobile && (
          <>
            <CButton
              text="Abrir minha conta"
              color="primary"
              sx={{
                borderRadius: 1,
                textTransform: 'none',
                whiteSpace: 'nowrap',
              }}
            />
            <Link href="/dashboard">
              <CButton
                text="Já tenho conta"
                sx={{
                  bgcolor: 'transparent',
                  borderRadius: 1,
                  border: '2px solid #236B7A',
                  textTransform: 'none',
                  whiteSpace: 'nowrap',
                }}
              />
            </Link>
          </>
        )}

        {isMobile && (
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon sx={{ color: '#236B7A' }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <MenuItem onClick={handleMenuClose}>Sobre</MenuItem>
              <MenuItem onClick={handleMenuClose}>Serviços</MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Button
                  fullWidth
                  sx={{
                    bgcolor: '#236B7A',
                    color: 'white',
                    borderRadius: 1,
                    textTransform: 'none',
                    fontWeight: 600,
                    ':hover': { bgcolor: '#1c5562' },
                  }}
                >
                  Abrir minha conta
                </Button>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/dashboard" style={{ width: '100%' }}>
                  <Button
                    fullWidth
                    sx={{
                      bgcolor: 'transparent',
                      color: '#236B7A',
                      borderRadius: 1,
                      border: '2px solid #236B7A',
                      textTransform: 'none',
                      fontWeight: 600,
                      ':hover': {
                        bgcolor: '#236B7A',
                        color: 'white',
                      },
                    }}
                  >
                    Já tenho conta
                  </Button>
                </Link>
              </MenuItem>
            </Menu>
          </>
        )}
      </Box>
    </Box>
  );
}

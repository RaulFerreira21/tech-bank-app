'use client';

import { Box, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import logoSmall from '../../assets/logo_small_white.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Balance() {
  const balance = 'R$ 7.000,00';
  const [showedBalance, setShowBalance] = useState(false);

  function handleShowBalance() {
    setShowBalance(!showedBalance);
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        borderBottom: '1px solid #454545',
        px: 2,
        py: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Saldo
        </Typography>
        <Image src={logoSmall} alt="Logo" width={21} height={20} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            px: 4,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              filter: showedBalance ? 'none' : 'blur(6px)',
              transition: 'filter 0.4s',
              userSelect: showedBalance ? 'text' : 'none',
            }}
          >
            {balance}
          </Typography>

          {showedBalance ? (
            <VisibilityOffIcon
              sx={{
                cursor: 'pointer',
                fontSize: { xs: '20px', sm: '24px' },
              }}
              onClick={handleShowBalance}
            />
          ) : (
            <VisibilityIcon
              sx={{
                cursor: 'pointer',
                fontSize: { xs: '20px', sm: '24px' },
              }}
              onClick={handleShowBalance}
            />
          )}
        </Box>

        <Link href="/extrato">
          <Typography
            sx={{
              color: 'white',
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            Ver extrato
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}

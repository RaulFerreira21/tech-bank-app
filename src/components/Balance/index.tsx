'use client';

import { Box, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import logoSmall from '../../assets/logo_small_white.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Balance() {
  const [showedBalance, setShowBalance] = useState(false);
  const [saldoCorrente, setSaldoCorrente] = useState<string>('R$ 0,00');
  const [saldoPoupanca, setSaldoPoupanca] = useState<string>('R$ 0,00');
  const [saldoTotal, setSaldoTotal] = useState<string>('R$ 0,00');

  function handleShowBalance() {
    setShowBalance(!showedBalance);
  }

  useEffect(() => {
    const fetchBalances = async () => {
      try {
        const res = await fetch('http://localhost:3001/extrato');
        const data = await res.json();

        const totalCorrente = data
          .filter((item: any) => item.conta === 'conta-corrente')
          .reduce((acc: number, item: any) => acc + Number(item.valor), 0);

        const totalPoupanca = data
          .filter((item: any) => item.conta === 'conta-poupança')
          .reduce((acc: number, item: any) => acc + Number(item.valor), 0);

        const total = totalCorrente + totalPoupanca;

        setSaldoCorrente(
          totalCorrente.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
          })
        );
        setSaldoPoupanca(
          totalPoupanca.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
          })
        );
        setSaldoTotal(
          total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
          })
        );
      } catch (e) {
        setSaldoCorrente('R$ 0,00');
        setSaldoPoupanca('R$ 0,00');
        setSaldoTotal('R$ 0,00');
      }
    };

    fetchBalances();
    const interval = setInterval(fetchBalances, 2000);

    return () => clearInterval(interval);
  }, []);

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
        <Image src={logoSmall} alt="Logo" width={21} height={20} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 4,
            ml: 2,
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="subtitle1"
              sx={{
                filter: showedBalance ? 'none' : 'blur(6px)',
                transition: 'filter 0.4s',
                userSelect: showedBalance ? 'text' : 'none',
                fontWeight: 600,
              }}
            >
              Conta Corrente
            </Typography>
            <Typography
              variant="h6"
              sx={{
                filter: showedBalance ? 'none' : 'blur(6px)',
                transition: 'filter 0.4s',
                userSelect: showedBalance ? 'text' : 'none',
                fontWeight: 600,
              }}
            >
              {saldoCorrente}
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="subtitle1"
              sx={{
                filter: showedBalance ? 'none' : 'blur(6px)',
                transition: 'filter 0.4s',
                userSelect: showedBalance ? 'text' : 'none',
                fontWeight: 600,
              }}
            >
              Conta Poupança
            </Typography>
            <Typography
              variant="h6"
              sx={{
                filter: showedBalance ? 'none' : 'blur(6px)',
                transition: 'filter 0.4s',
                userSelect: showedBalance ? 'text' : 'none',
                fontWeight: 600,
              }}
            >
              {saldoPoupanca}
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="subtitle1"
              sx={{
                filter: showedBalance ? 'none' : 'blur(6px)',
                transition: 'filter 0.4s',
                userSelect: showedBalance ? 'text' : 'none',
                fontWeight: 700,
              }}
            >
              Saldo Total
            </Typography>
            <Typography
              variant="h6"
              sx={{
                filter: showedBalance ? 'none' : 'blur(6px)',
                transition: 'filter 0.4s',
                userSelect: showedBalance ? 'text' : 'none',
                fontWeight: 700,
              }}
            >
              {saldoTotal}
            </Typography>
          </Box>
        </Box>
        {showedBalance ? (
          <VisibilityOffIcon
            sx={{
              cursor: 'pointer',
              fontSize: { xs: '20px', sm: '24px' },
              ml: 2,
            }}
            onClick={handleShowBalance}
          />
        ) : (
          <VisibilityIcon
            sx={{
              cursor: 'pointer',
              fontSize: { xs: '20px', sm: '24px' },
              ml: 2,
            }}
            onClick={handleShowBalance}
          />
        )}
        <Link href="/extrato">
          <Typography
            sx={{
              color: 'white',
              textDecoration: 'underline',
              cursor: 'pointer',
              ml: 2,
            }}
          >
            Ver extrato
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}

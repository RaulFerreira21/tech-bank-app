'use client';

import ButtonServices from '@/components/ButtonServices';
import { Box } from '@mui/material';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SavingsIcon from '@mui/icons-material/Savings';
import CardComponents from '@/components/CardComponents';
import CardServicos from '@/components/CardServicos';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          py: 5,
          justifyContent: 'space-around',
          borderBottom: '1px solid #454545',
          color: '#ffffff',
        }}
      >
        <Link href="/transferir" className="navigationLink">
          <ButtonServices
            icon={<CurrencyExchangeIcon fontSize="large" />}
            label="Transferir"
            color="info"
          />
        </Link>

        <Link href="/boleto" className="navigationLink">
          <ButtonServices
            icon={<ReceiptIcon fontSize="large" />}
            label="Pagar Boleto"
            color="info"
          />
        </Link>
        <Link href="/deposito" className="navigationLink">
          <ButtonServices
            icon={<SavingsIcon fontSize="large" />}
            label="Depositar"
            color="info"
          />
        </Link>
      </Box>
      <CardComponents />
      <CardServicos />
    </>
  );
}

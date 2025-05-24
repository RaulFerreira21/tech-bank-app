'use client';

import React, { useEffect, useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Title from '@/components/Title';
import { Box } from '@mui/material';
import ExtratoList from '../components/ExtratoList'; // Use o componente pronto

const iconeMap: Record<string, React.ReactElement> = {
  LanguageIcon: <LanguageIcon sx={{ fontSize: 32 }} />,
  AttachMoneyIcon: <AttachMoneyIcon sx={{ fontSize: 32 }} />,
  StorefrontIcon: <StorefrontIcon sx={{ fontSize: 32 }} />,
};

export default function Extrato() {
  const [dados, setDados] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/extrato')
      .then((res) => res.json())
      .then((data) => {
        const dadosComIcone = data.map((item: any) => ({
          ...item,
          icone: iconeMap[item.icone] || null,
        }));
        setDados(dadosComIcone);
      });
  }, []);

  return (
    <>
      <Title title="Extrato da conta-corrente" />
      <Box
        sx={{
          height: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#ffffff',
        }}
      >
        <ExtratoList itens={dados} />
      </Box>
    </>
  );
}

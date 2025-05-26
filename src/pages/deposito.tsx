'use client';

import Title from '@/components/Title';
import { Box, TextField, Typography } from '@mui/material';
import CButton from '@/components/CButton';
import { useState } from 'react';

export default function Deposito() {
  const [contaDeposito, setContaDeposito] = useState('');
  const [valor, setValor] = useState('');

  function handleConta(conta: string) {
    setContaDeposito(conta);
  }

  async function handleConcluir() {
    if (!valor || !contaDeposito) {
      alert('Preencha o valor e selecione a conta.');
      return;
    }

    const valorNumerico = Number(valor.replace(',', '.').replace('R$', '').trim());
    if (isNaN(valorNumerico) || valorNumerico <= 0) {
      alert('Digite um valor válido para depósito.');
      return;
    }

    // Monta o novo item para o extrato, agora incluindo o campo 'conta'
    const novoItem = {
      tipo: 'Depósito',
      descricao: contaDeposito === 'conta-corrente' ? 'Conta Corrente' : 'Conta Poupança',
      horario: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      valor: valorNumerico,
      icone: 'AttachMoneyIcon',
      data: new Date().toISOString().slice(0, 10),
      conta: contaDeposito, // importante para separar os saldos
    };

    // Salva no db.json via json-server
    await fetch('http://localhost:3001/extrato', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoItem),
    });

    alert('Depósito realizado com sucesso!');
    setValor('');
    setContaDeposito('');
  }

  return (
    <>
      <Title title="Realizar depósito" />

      <Box sx={{ p: 3, bgcolor: '#ffffff' }}>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
          Qual valor deseja depositar?
        </Typography>

        <TextField
          fullWidth
          variant="standard"
          placeholder="R$"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          slotProps={{
            input: {
              disableUnderline: false,
            },
          }}
          sx={{ mb: 4 }}
        />

        <Box sx={{ mb: 4, width: '100%' }}>
          <Typography sx={{ mb: 1, fontWeight: 'bold' }}>
            Em qual conta você depositará esse valor?
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 2,
              justifyContent: 'center',
            }}
          >
            <CButton
              color={contaDeposito === 'conta-corrente' ? 'info' : 'inherit'}
              text="conta-corrente"
              onClick={() => handleConta('conta-corrente')}
            />
            <CButton
              color={contaDeposito === 'conta-poupança' ? 'info' : 'inherit'}
              text="conta-poupança"
              onClick={() => handleConta('conta-poupança')}
            />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <CButton color="primary" text="Concluir" onClick={handleConcluir} />
        </Box>
      </Box>
    </>
  );
}

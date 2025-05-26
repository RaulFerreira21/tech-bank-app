'use client';

import Title from '@/components/Title';
import { Box, TextField, Typography } from '@mui/material';
import CButton from '@/components/CButton';
import { useState } from 'react';

export default function PagarBoleto() {
  const [conta, setConta] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  function handleConta(contaSelecionada: string) {
    setConta(contaSelecionada);
  }

  async function handleConcluir() {
    if (!descricao || !valor || !conta) {
      alert('Preencha todos os campos e selecione a conta.');
      return;
    }

    const valorNumerico = Number(valor.replace(',', '.').replace('R$', '').trim());
    if (isNaN(valorNumerico) || valorNumerico <= 0) {
      alert('Digite um valor válido para o boleto.');
      return;
    }

    // Busca o extrato para calcular o saldo da conta selecionada
    const res = await fetch('http://localhost:3001/extrato');
    const extrato = await res.json();
    const saldoConta = extrato
      .filter((item: any) =>
        // Se o item tem campo conta, filtra normalmente. Se não tem, considera para todas as contas.
        !item.conta || item.conta === conta
      )
      .reduce((acc: number, item: any) => acc + Number(item.valor), 0);

    const saldoAjustado = Number(saldoConta.toFixed(2));
    const valorAjustado = Number(valorNumerico.toFixed(2));

    if (saldoAjustado < valorAjustado) {
      alert('Saldo insuficiente para pagar o boleto.');
      return;
    }

    const contaLabel =
      conta === 'conta-corrente'
        ? 'Conta Corrente'
        : conta === 'conta-poupança'
        ? 'Conta Poupança'
        : conta;

    const novoItem = {
      tipo: `Boleto (${contaLabel})`,
      descricao,
      horario: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      valor: -Math.abs(valorNumerico),
      icone: 'LanguageIcon',
      data: new Date().toISOString().slice(0, 10),
      conta,
    };

    await fetch('http://localhost:3001/extrato', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoItem),
    });

    alert('Boleto pago com sucesso!');
    setDescricao('');
    setValor('');
    setConta('');
  }

  return (
    <>
      <Title title="Pagar Boleto" />

      <Box sx={{ p: 3, bgcolor: '#ffffff' }}>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          sx={{ mb: 1, fontWeight: 'bold' }}
        >
          Descrição do boleto
        </Typography>
        <TextField
          fullWidth
          variant="standard"
          placeholder="Ex: Conta de luz"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          slotProps={{
            input: {
              disableUnderline: false,
            },
          }}
          sx={{ mb: 4 }}
        />

        <Typography
          variant="subtitle1"
          color="textSecondary"
          sx={{ mb: 1, fontWeight: 'bold' }}
        >
          Qual valor do boleto?
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
            inputLabel: {
              color: 'error',
            },
          }}
          sx={{ mb: 4 }}
        />

        <Box sx={{ mb: 4, width: '100%' }}>
          <Typography sx={{ mb: 1, fontWeight: 'bold' }}>
            De qual conta vai sair esse valor?
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
              color={conta === 'conta-corrente' ? 'info' : 'inherit'}
              text="conta-corrente"
              onClick={() => handleConta('conta-corrente')}
            />
            <CButton
              color={conta === 'conta-poupança' ? 'info' : 'inherit'}
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
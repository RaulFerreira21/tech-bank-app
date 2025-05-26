import Title from '@/components/Title';
import { Box, TextField, Typography } from '@mui/material';
import CButton from '@/components/CButton';
import { useState } from 'react';

export default function Transferir() {
  const [contaDeposito, setContaDeposito] = useState('');
  const [destinatario, setDestinatario] = useState('');
  const [valor, setValor] = useState('');

  function handleConta(conta: string) {
    setContaDeposito(conta);
  }

  async function handleConcluir() {
    if (!destinatario || !valor || !contaDeposito) {
      alert('Preencha todos os campos e selecione a conta.');
      return;
    }

    const valorNumerico = Number(valor.replace(',', '.').replace('R$', '').trim());
    if (isNaN(valorNumerico) || valorNumerico <= 0) {
      alert('Digite um valor válido para transferência.');
      return;
    }

    // Busca o extrato para calcular o saldo da conta selecionada
    const res = await fetch('http://localhost:3001/extrato');
    const extrato = await res.json();
    const saldoConta = extrato
      .filter((item: any) => item.conta === contaDeposito)
      .reduce((acc: number, item: any) => acc + Number(item.valor), 0);

    const saldoAjustado = Number(saldoConta.toFixed(2));
    const valorAjustado = Number(valorNumerico.toFixed(2));

    if (saldoAjustado < valorAjustado) {
      alert('Saldo insuficiente para realizar a transferência.');
      return;
    }

    const contaLabel =
      contaDeposito === 'conta-corrente'
        ? 'Conta Corrente'
        : contaDeposito === 'conta-poupança'
        ? 'Conta Poupança'
        : contaDeposito;

    const novoItem = {
      tipo: `Transferência (${contaLabel})`,
      descricao: destinatario,
      horario: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      valor: -Math.abs(valorNumerico),
      icone: 'LanguageIcon',
      data: new Date().toISOString().slice(0, 10),
      conta: contaDeposito,
    };

    await fetch('http://localhost:3001/extrato', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoItem),
    });

    alert('Transferência realizada com sucesso!');
    setDestinatario('');
    setValor('');
    setContaDeposito('');
  }

  return (
    <>
      <Title title="Realizar tranferência" />

      <Box sx={{ p: 3, bgcolor: '#ffffff' }}>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          sx={{ mb: 1, fontWeight: 'bold' }}
        >
          Para quem deseja transferir?
        </Typography>
        <TextField
          fullWidth
          variant="standard"
          placeholder="Nome do destinatário"
          value={destinatario}
          onChange={(e) => setDestinatario(e.target.value)}
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
          Qual valor você deseja transferir?
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

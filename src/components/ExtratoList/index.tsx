'use client';

import React, { useEffect, useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
  IconButton,
  Box,
  TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LanguageIcon from '@mui/icons-material/Language';
import CloseIcon from '@mui/icons-material/Close';
import { type ReactNode } from 'react';
import ButtonServices from '../ButtonServices';

export type ExtratoItem = {
  id: number;
  tipo: string;
  descricao: string;
  horario: string;
  valor: number;
  icone: ReactNode;
  data: string;
  conta?: string;
};

type ExtratoListProps = {
  itens: ExtratoItem[];
};

function formatarDataGrupo(dataStr: string): string {
  // dataStr sempre no formato "YYYY-MM-DD"
  const hoje = new Date();
  const [ano, mes, dia] = dataStr.split('-').map(Number);
  const data = new Date(ano, mes - 1, dia);

  // Zera horas para comparar apenas o dia
  const hojeZero = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
  const dataZero = new Date(data.getFullYear(), data.getMonth(), data.getDate());

  const diffTime = hojeZero.getTime() - dataZero.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Hoje';
  if (diffDays === 1) return 'Ontem';

  return dataZero.toLocaleDateString('pt-BR');
}

function agruparPorData(itens: ExtratoItem[]): Record<string, ExtratoItem[]> {
  return itens.reduce((acc, item) => {
    const chave = item.data;
    if (!acc[chave]) acc[chave] = [];
    acc[chave].push(item);
    return acc;
  }, {} as Record<string, ExtratoItem[]>);
}

function formatarValor(valor: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(valor);
}

export default function ExtratoList({ itens }: ExtratoListProps) {
  const [dados, setDados] = useState<any[]>([]);
  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [novoValor, setNovoValor] = useState<string>('');

  useEffect(() => {
    const fetchDados = () => {
      fetch('http://localhost:3001/extrato')
        .then((res) => res.json())
        .then((data) => {
          setDados(data.map((item: any) => ({
            ...item,
          })));
        });
    };
    fetchDados();
    const interval = setInterval(fetchDados, 2000);
    return () => clearInterval(interval);
  }, []);

  const grupos = agruparPorData(dados);

  const datasOrdenadas = Object.keys(grupos).sort((a, b) => {
    // Ordena do mais recente para o mais antigo
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });

  // Função para editar valor
  const handleEditClick = (item: ExtratoItem) => {
    setEditandoId(item.id);
    setNovoValor(item.valor.toString().replace('.', ','));
  };

  const handleSave = async (item: ExtratoItem) => {
    const valorNumber = Number(novoValor.replace(',', '.'));
    if (isNaN(valorNumber)) {
      window.alert('Valor inválido!');
      return;
    }
    await fetch(`http://localhost:3001/extrato/${item.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ valor: valorNumber }),
    });
    setEditandoId(null);
    setNovoValor('');
    // O useEffect já atualiza a lista
  };

  // Função para deletar item
  const handleDelete = async (item: ExtratoItem) => {
    const confirmar = window.confirm(
      `Deseja realmente excluir "${item.descricao}"?`
    );
    if (!confirmar) return;
    await fetch(`http://localhost:3001/extrato/${item.id}`, {
      method: 'DELETE',
    });
    // Não precisa recarregar, pois o useEffect já atualiza a cada 2s
  };

  const handleCancel = () => {
    setEditandoId(null);
    setNovoValor('');
  };

  function getIconComponent(iconName: string) {
    switch (iconName) {
      case 'AttachMoneyIcon':
        return <AttachMoneyIcon />;
      case 'StorefrontIcon':
        return <StorefrontIcon />;
      case 'LanguageIcon':
        return <LanguageIcon />;
      default:
        return <AttachMoneyIcon />;
    }
  }

  return (
    <Box
      sx={{
        width: '100%',
        mx: 2,
        maxHeight: '60vh',
        overflowY: 'auto',
        scrollbarGutter: 'stable',
        borderRadius: 2,
        p: 1,
      }}
    >
      <List
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        {datasOrdenadas.map((data) => (
          <React.Fragment key={data}>
            <Typography
              variant="h6"
              sx={{
                mt: 2,
                ml: 2,
                fontWeight: 600,
              }}
            >
              {formatarDataGrupo(data)}
            </Typography>
            {grupos[data]
              .slice()
              .sort((a, b) =>
                a.horario < b.horario ? 1 : a.horario > b.horario ? -1 : 0
              )
              .map((item) => {
                const isNegative = item.valor < 0;
                const isEditing = editandoId === item.id;
                return (
                  <ListItem
                    key={item.id}
                    secondaryAction={
                      isEditing ? (
                        <>
                          <IconButton
                            edge="end"
                            aria-label="save"
                            sx={{ color: '#388e3c', mr: 2 }}
                            onClick={() => handleSave(item)}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="cancel"
                            sx={{ color: '#d32f2f' }}
                            onClick={handleCancel}
                          >
                            <CloseIcon />
                          </IconButton>
                        </>
                      ) : (
                        <>
                          <IconButton
                            edge="end"
                            aria-label="edit"
                            sx={{ color: '#000', mr: 2 }}
                            onClick={() => handleEditClick(item)}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            sx={{ color: '#000' }}
                            onClick={() => handleDelete(item)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </>
                      )
                    }
                    sx={{
                      flexWrap: 'wrap',
                    }}
                  >
                    <ListItemAvatar sx={{ mr: 2 }}>
                      <ButtonServices icon={getIconComponent(item.icone as string)} disabled />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.tipo}
                      secondary={
                        <>
                          <Typography component="span" variant="inherit">
                            {item.descricao}
                          </Typography>
                          <br />
                          <Typography component="span" variant="caption">
                            {item.horario}
                          </Typography>
                        </>
                      }
                      sx={{
                        flex: 2,
                        '& .MuiListItemText-primary': { color: '#000' },
                        '& .MuiListItemText-secondary': { color: '#000' },
                      }}
                    />
                    <ListItemText
                      secondary={
                        isEditing ? (
                          <TextField
                            size="small"
                            value={novoValor}
                            onChange={(e) => setNovoValor(e.target.value)}
                            sx={{ width: 90 }}
                          />
                        ) : (
                          formatarValor(item.valor)
                        )
                      }
                      sx={{
                        '& .MuiListItemText-secondary': (theme) => ({
                          color: isNegative
                            ? theme.palette.error.main
                            : theme.palette.success.main,
                          fontWeight: 600,
                        }),
                        textAlign: 'center',
                      }}
                    />
                  </ListItem>
                );
              })}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}

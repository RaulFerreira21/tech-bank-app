'use client';

import * as React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { type ReactNode } from 'react';

export type ExtratoItem = {
  id: number;
  tipo: string;
  descricao: string;
  horario: string;
  valor: number;
  icone: ReactNode;
  data: string; // formato 'YYYY-MM-DD'
};

type ExtratoListProps = {
  itens: ExtratoItem[];
};

function formatarDataGrupo(dataStr: string): string {
  const hoje = new Date();
  const data = new Date(dataStr);
  const diffTime = hoje.setHours(0, 0, 0, 0) - data.setHours(0, 0, 0, 0);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Hoje';
  if (diffDays === 1) return 'Ontem';

  return data.toLocaleDateString('pt-BR');
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

export default function ExtratoList({ itens }: Readonly<ExtratoListProps>) {
  const grupos = agruparPorData(itens);

  // Ordena as datas decrescente para exibir o mais recente primeiro
  const datasOrdenadas = Object.keys(grupos).sort((a, b) => (a < b ? 1 : -1));

  return (
    <List sx={{ flex: 1, maxWidth: '80vh', ml: 4, mr: 4 }}>
      {datasOrdenadas.map((data) => (
        <React.Fragment key={data}>
          <Typography
            variant="h6"
            sx={{ mt: 2, ml: 2, borderBottom: 0, margin: 0, fontWeight: 600 }}
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
              return (
                <ListItem
                  key={item.id}
                  sx={{ ml: 2 }}
                  secondaryAction={
                    <>
                      <IconButton
                        edge="end"
                        aria-label="edit"
                        sx={{ color: '#000', mr: 2 }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        sx={{ color: '#000' }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </>
                  }
                >
                  <ListItemAvatar sx={{ mr: 2 }}>
                    <Avatar sx={{ width: 48, height: 48 }}>{item.icone}</Avatar>
                    {/* <ButtonServices icon={item.icone} disableRipple /> */}
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
                      '& .MuiListItemText-primary': { color: '#000' },
                      '& .MuiListItemText-secondary': { color: '#000' },
                    }}
                  />
                  <ListItemText
                    secondary={formatarValor(item.valor)}
                    sx={{
                      '& .MuiListItemText-secondary': (theme) => ({
                        color: isNegative
                          ? theme.palette.error.main
                          : theme.palette.success.main,
                        fontWeight: 600,
                      }),
                    }}
                  />
                </ListItem>
              );
            })}
        </React.Fragment>
      ))}
    </List>
  );
}

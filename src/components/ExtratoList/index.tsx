import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Typography,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { type ReactNode } from 'react'

export type ExtratoItem = {
  id: number;
  tipo: string;
  descricao: string;
  horario: string;
  valor: string;
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

  if (diffDays === 0) return "Hoje";
  if (diffDays === 1) return "Ontem";

  return data.toLocaleDateString("pt-BR");
}

function agruparPorData(itens: ExtratoItem[]): Record<string, ExtratoItem[]> {
  return itens.reduce((acc, item) => {
    const chave = item.data;
    if (!acc[chave]) acc[chave] = [];
    acc[chave].push(item);
    return acc;
  }, {} as Record<string, ExtratoItem[]>);
}


export default function ExtratoList( { itens }: Readonly<ExtratoListProps>) {
  const grupos = agruparPorData(itens);

  // Ordena as datas decrescente para exibir o mais recente primeiro
  const datasOrdenadas = Object.keys(grupos).sort((a, b) => (a < b ? 1 : -1));

  return (
    <List sx={{ width: "100%", maxWidth: 617 }}>
      {datasOrdenadas.map((data) => (
        <React.Fragment key={data}>
          <Typography variant="h6" sx={{ mt: 2, ml: 2 }}>
            {formatarDataGrupo(data)}
          </Typography>
          <Divider />
          {grupos[data].map((item) => (
            <ListItem
              key={item.id}
              sx={{ ml: 2 }}
              secondaryAction={
                <>
                  <IconButton edge="end" aria-label="edit" sx={{ color: "#fff", mr: 2 }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" sx={{ color: "#fff" }}>
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemAvatar>
                <Avatar>{item.icone}</Avatar>
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
                  "& .MuiListItemText-primary": { color: "#fff" },
                  "& .MuiListItemText-secondary": { color: "#9e9e9e" },
                }}
              />
              <ListItemText
                secondary={item.valor}
                sx={{
                  "& .MuiListItemText-secondary": { color: "#B82E2E" },
                }}
              />
            </ListItem>
          ))}
        </React.Fragment>
      ))}
    </List>
  );
}

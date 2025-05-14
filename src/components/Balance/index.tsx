"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from "react";

export default function Balance() {
  let balance: string = "R$ 7.000,00";
  const [showedBalance, setShowBalance] = React.useState(false);

  const handleShowBalanceClick = () => {
    setShowBalance(!showedBalance);
    console.log(showedBalance);
  };
  return (
    <Box>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "transparent",
          color: "white",
        }}
      >
        <CardContent>
          <Typography variant="body2" sx={{margin: '0 0 10px 0'}}>Saldo:</Typography>
          <Box sx={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
            <Typography variant="body2">{balance}</Typography>
            <VisibilityIcon
              sx={{ color: "white", marginLeft: '10px' }}
              onClick={handleShowBalanceClick}
            />
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Typography variant="body2">Ver Extrato</Typography>
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

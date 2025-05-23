import { Box, Typography } from '@mui/material';

export default function CardServicos() {
  const options = ['Crédito para celular', 'Doações', 'Empréstimo', 'Seguros'];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        bgcolor: '#121212',
        p: 2,
        borderBottom: '1px solid #454545',
        color: '#ffffff',
      }}
    >
      <Typography variant="h6">Outros serviços</Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', px: 4, py: 1 }}>
        {options.map((item) => (
          <Typography
            key={item}
            variant="body2"
            sx={{
              textDecoration: 'underline',
              cursor: 'pointer',
              '&:hover': { opacity: 0.8 },
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

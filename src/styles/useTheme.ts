'use client';

import { createTheme } from '@mui/material/styles';

export function useTheme() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, sans-serif',
      h1: {
        fontSize: '36px',
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: '-0.01562em',
      },
      h2: {
        fontSize: '28px',
        fontWeight: 600,
        lineHeight: 1.3,
        letterSpacing: '-0.00833em',
      },
      h3: {
        fontSize: '24px',
        fontWeight: 500,
        lineHeight: 1.4,
      },
      h4: {
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: 1.4,
      },
      h5: {
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: 1.4,
      },
      h6: {
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: 1.5,
      },
      body1: {
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: 1.6,
      },
      body2: {
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: 1.5,
      },
    },

    palette: {
      primary: { main: '#236B7A', dark: '#537880' },
      secondary: { main: '#acacac', dark: '#e6e6e6' },
      info: { main: '#5b5b5b', dark: '#7c7c7c' },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: '#121212',
          },
        },
      },
    },
  });

  return theme;
}

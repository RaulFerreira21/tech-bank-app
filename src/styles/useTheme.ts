import { createTheme } from '@mui/material/styles'

export function useTheme() {
  const theme = createTheme({
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
  })

  return theme
}

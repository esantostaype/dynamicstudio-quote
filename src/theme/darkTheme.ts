import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#30e600',
    }
  },
  typography: {
    fontFamily: 'IBM Plex Sans, sans-serif',
  }
})
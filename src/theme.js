import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6c63ff', // soft violet
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f9f9f9',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a1a',
    },
  },
  shape: {
    borderRadius: 12, // Apple-style roundness
  },
  typography: {
    fontFamily: 'Inter, Roboto, sans-serif',
  },
});

export default theme;

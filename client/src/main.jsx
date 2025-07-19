import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { StylesProvider } from '@mui/styles';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider as StylesThemeProvider } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css'; 

const theme = createTheme({
  palette: {
    background: {
      default: '#f8f9f9', // Soft white (from logo)
      paper: '#000000ff',
    },
    primary: {
      main: '#032d47', // Dark Blue
    },
    secondary: {
      main: '#09a5b2', // Teal
    },
    thired: {
      main: '#ec2053', // Pinkish Red
      contrastText: '#ffffff',
    },
    text: {
      primary: '#17191aff',  // Dark blue for better consistency
      secondary: '#000000',
      disabled: '#9EA99D',
      title: '#ec2053',     // Pinkish red for titles
    },
    colors: {
      avatar: '#ffffff',
      avatarBackground: '#032d47',
    },
    button: {
      background: '#032d47',       // Dark blue base
      text: '#ffffff',
      border: '#032d47',
      hover: '#09a5b2',            // Teal hover
      hoverText: '#ffffff',
      disableBaground: '#999999',
      disabledText: '#666666',
      disabledBorder: '#999999',
    },
  },
  card: {
    backgroundColor: '#f8f9f9',
    text: '#032d47',
    like: '#ec2053',  // Like button in pinkish red
    delete: '#ec2053', // Delete can stay the same or use a more alerting red
  },

});

createRoot(document.getElementById('root')).render(
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <StylesThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </StylesThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);

import * as React from 'react';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

// import Extras from './components/Extras';
import Header from './components/Header';
import List from './components/List';

import config from './config';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...config.colors.primary,
      ...(mode === 'dark' && {
        main: config.colors.primary[300],
      }),
    },
    secondary: {
      ...config.colors.secondary,
    },
    ...(mode === 'dark' && {
    }),
    text: {
      ...(mode === 'light'
        ? {
          primary: grey[900],
          secondary: grey[800],
        }
        : {
          primary: '#fff',
          secondary: grey[500],
        }),
    },
  },
});

const darkModeTheme = createTheme(getDesignTokens(config.colors.mode));

function App() {

  return (
    <React.Fragment>
      <ThemeProvider theme={darkModeTheme}>
        <CssBaseline enableColorScheme />
        <Container maxWidth="sm" sx={{ py: 3 }}>
          <Header />
          <List />
        </Container>
        <footer style={{ width:"100%", fontSize: "xx-small", color: "gray", position: "fixed", bottom: 2, textAlign: "center"}}>
          proudly using <Link href="https://gitlab.com/osouza.de/bah-link-tri" color="inherit" underline="none">BahLinkTri</Link>
        </footer>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;

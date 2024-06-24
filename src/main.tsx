import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Navigation } from './routes.tsx';
import ResetStyles from './styles/reset.ts';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <Navigation />
    </ThemeProvider>
  </React.StrictMode>,
);

import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ResetStyles from './styles/reset.ts';
import theme from './styles/theme';
import { App, About } from './components';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);

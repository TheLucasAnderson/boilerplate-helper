import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import { render } from '@testing-library/react';

export const renderWithThemeProvider = (component: ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

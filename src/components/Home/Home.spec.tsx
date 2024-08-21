import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithThemeProvider } from '../../utils/tests';
import { Home } from '.';

describe('Home', () => {
  it('renders a heading with the correct text', () => {
    renderWithThemeProvider(<Home />);
    const textElement = screen.getByText('Web View - Boilerplate Helper');
    expect(textElement).not.toBe(null);
  });
});

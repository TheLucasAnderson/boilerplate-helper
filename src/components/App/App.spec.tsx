import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithThemeProvider } from '../../utils/tests';
import { App } from '.';

describe('App', () => {
  it('renders a heading with the correct text', () => {
    renderWithThemeProvider(<App />);
    const textElement = screen.getByText('Web View - Boilerplate Helper');
    expect(textElement).not.toBe(null);
  });
});

import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithThemeProvider } from '../../utils/tests';
import { About } from '.';

describe('<About />', () => {
  it('renders a heading with the correct text', () => {
    renderWithThemeProvider(<About />);
    const textElement = screen.getByText('gh/TheLucasAnderson');
    expect(textElement).not.toBe(null);
  });
});

import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { About } from '.';

describe('<About />', () => {
  it('renders a heading with the correct text', () => {
    render(<About />);
    const textElement = screen.getByText('gh/TheLucasAnderson');
    expect(textElement).not.toBe(null);
  });
});

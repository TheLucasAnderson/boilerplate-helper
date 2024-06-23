import styled, { css } from 'styled-components';

export const Anchor = styled.a`
  display: block;
  text-align: center;

  ${({ theme }) => css`
    padding: ${theme.spacings.small};
  `};
`;

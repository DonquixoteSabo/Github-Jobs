import styled from 'styled-components';

export const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.steelGray};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 300;
  strong {
    font-weight: 700;
  }
`;

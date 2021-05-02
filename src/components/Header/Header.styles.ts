import styled from 'styled-components';

export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.steelGray};
  font-weight: 300;
  strong {
    font-weight: 700;
  }
`;

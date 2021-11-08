import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.steelGray};
  font-weight: 300;
  strong {
    font-weight: 700;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

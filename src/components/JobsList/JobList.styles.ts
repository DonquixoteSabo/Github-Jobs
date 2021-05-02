import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-column: 1/-1;
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    grid-column: 2/3;
  }
`;

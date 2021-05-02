import styled from 'styled-components';

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(4, auto);
  min-height: 100vh;
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    grid-template-columns: 380px 1fr;
    grid-template-rows: auto 1fr;
  }
`;

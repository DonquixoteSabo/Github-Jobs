import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 20px 50px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    padding: 20px 100px;
  }
`;

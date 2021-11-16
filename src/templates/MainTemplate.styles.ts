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

export const Footer = styled.footer`
  font-family: Montserrat, Poppins, Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 17px;
  text-align: center;
  color: ${({ theme }) => theme.colors.heather100};

  a {
    font-weight: 700;
    text-decoration: underline;
    color: inherit;
  }
`;
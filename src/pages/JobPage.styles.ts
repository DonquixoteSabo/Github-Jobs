import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: 1fr;
  grid-gap: 2em;
  margin-top: 40px;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.chambray};

  .apply {
    display: block;
    color: ${({ theme }) => theme.colors.heather};
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.1em;
  }

  .email {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.blue};

  span {
    margin-left: 1em;
  }
`;

export const Section = styled.section`
  font-family: Roboto, Poppins, sans-serif;
`;

export const Title = styled.header`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`;

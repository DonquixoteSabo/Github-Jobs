import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows:  repeat(2, auto);
  grid-template-columns: 1fr;
  grid-gap: 2em;
  margin-top: 40px;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  color: #334680;
  .apply {
    display: block;
    color:#B9BDCF;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: .1em;
  }
  .email {
    color: #1E86FF;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #1E86FF;

  span {
    margin-left: 1em;
  }
`;

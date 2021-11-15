import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardWrapper = styled(Link)`
  width: 100%;
  display: grid;
  grid-template-columns: 90px auto 1fr;
  grid-template-rows: auto 1fr;
  align-items: center;
  grid-gap: 15px;
  border-radius: 4px;
  background-color: white;
  padding: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  margin: 25px 0;
  text-decoration: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    grid-template-columns: 90px 1fr auto;
  }
`;
export const CardLogo = styled.img`
  width: 100%;
  grid-row: 1/-1;
  border-radius: 4px;
`;
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.chambray};

  .title {
    font-weight: 400;
    margin: 0.5em 0;
    font-size: ${({ theme }) => theme.fontSize.xl};
    @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
      font-size: ${({ theme }) => theme.fontSize.xxl};
    }
  }
`;
export const CardInfo = styled.div`
  grid-column: 2/3;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.heather};

  div {
    display: flex;

    p {
      margin-left: 10px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    grid-column: 3/4;
    margin-top: auto;
    font-size: ${({ theme }) => theme.fontSize.m};
    div {
      margin-left: 30px;
    }
  }
`;
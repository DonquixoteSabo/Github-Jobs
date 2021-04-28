import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { AiOutlineClockCircle } from 'react-icons/ai';

//styles
import styled from 'styled-components';
export const CardWrapper = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  display: grid;
  grid-template-columns: 90px auto 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 15px;
  padding: 12px;
  cursor: pointer;
`;
export const CardLogo = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;
export const CardBody = styled.div`
  color: ${({ theme }) => theme.colors.chambray};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .company {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  .title {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  .type {
    width: 75px;
    height: 26px;
    border: 1px solid ${({ theme }) => theme.colors.chambray};
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const CardInfo = styled.div`
  grid-column: 2/3;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: #b9bdcf;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
  }
`;
function JobCard() {
  return (
    <CardWrapper>
      <CardLogo src="https://picsum.photos/200" />
      <CardBody>
        <h3 className="company">Kasisto</h3>
        <h1 className="title">Front-End Software Engineer</h1>
        <div className="type">
          <p className="company">Full time</p>
        </div>
      </CardBody>
      <CardInfo>
        <div>
          <BiWorld />
          <p className="city">New York</p>
        </div>
        <div>
          <AiOutlineClockCircle />
          <p className="time">5 days ago</p>
        </div>
      </CardInfo>
    </CardWrapper>
  );
}

export { JobCard };

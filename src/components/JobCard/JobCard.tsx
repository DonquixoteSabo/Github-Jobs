import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { AiOutlineClockCircle } from 'react-icons/ai';
//styles
import { CardWrapper, CardLogo, CardBody, CardInfo } from './JobCard.styles';
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

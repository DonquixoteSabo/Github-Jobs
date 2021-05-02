import React from 'react';
//icons
import { BiWorld } from 'react-icons/bi';
import { AiOutlineClockCircle } from 'react-icons/ai';
//styles
import { CardWrapper, CardLogo, CardBody, CardInfo } from './JobCard.styles';
//types
import { Job } from 'types/Job';

const dateFormat = require('dateformat');

function JobCard({
  type,
  title,
  company,
  companyLogo,
  createdAt,
  location,
}: Job) {
  return (
    <CardWrapper>
      {companyLogo ? (
        <CardLogo src={companyLogo} alt={`${company} logo`} />
      ) : (
        <CardLogo src="https://i.imgur.com/Poiq6cC.png" alt="not found" />
      )}
      <CardBody>
        <h3 className="company">{company}</h3>
        <h1 className="title">{title}</h1>
        <div className="type">
          <p className="company">{type}</p>
        </div>
      </CardBody>
      <CardInfo>
        <div>
          <BiWorld />
          <p className="city">{location}</p>
        </div>
        <div>
          <AiOutlineClockCircle />
          <p className="time">{dateFormat(createdAt, 'd mmmm')}</p>
        </div>
      </CardInfo>
    </CardWrapper>
  );
}

export { JobCard };

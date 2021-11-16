import React from 'react';
//icons
import { BiWorld } from 'react-icons/bi';
import { AiOutlineClockCircle } from 'react-icons/ai';
//styles
import { CardBody, CardInfo, CardLogo, CardWrapper } from './JobCard.styles';
import { Type } from 'components/Type';
//types
import { Job } from 'store/jobs';

const JobCard = ({
  type,
  title,
  company,
  companyLogo,
  createdAt,
  location,
  id,
}: Job) => (
  <CardWrapper to={`/job/${id}`}>
    {companyLogo ? (
      <CardLogo src={companyLogo + id} alt={`${company} logo`} />
    ) : (
      <CardLogo src="https://i.imgur.com/Poiq6cC.png" alt="not found" />
    )}
    <CardBody>
      <h3 className="company">{company}</h3>
      <h1 className="title">{title}</h1>
      <Type type={type} />
    </CardBody>
    <CardInfo>
      <div>
        <BiWorld />
        <p className="city">{location}</p>
      </div>
      <div>
        <AiOutlineClockCircle />
        <p>{createdAt}</p>
      </div>
    </CardInfo>
  </CardWrapper>
);

export { JobCard };

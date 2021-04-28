import React from 'react';
//icons
import { BiWorld } from 'react-icons/bi';
import { AiOutlineClockCircle } from 'react-icons/ai';
//styles
import { CardWrapper, CardLogo, CardBody, CardInfo } from './JobCard.styles';
interface Props {
  type: string;
  title: string;
  company: string;
  companyLogo?: string;
  createdAt: string;
  location: string;
}
function JobCard({
  type,
  title,
  company,
  companyLogo,
  createdAt,
  location,
}: Props) {
  return (
    <CardWrapper>
      <CardLogo src={companyLogo} />
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
          <p className="time">{createdAt}</p>
        </div>
      </CardInfo>
    </CardWrapper>
  );
}

export { JobCard };

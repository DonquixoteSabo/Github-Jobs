import React from 'react';
import { useParams } from 'react-router-dom';
//hooks
import { useGetOneJobQuery } from '../store/jobs';
//styles
import {Wrapper, StyledLink} from './JobPage.styles';
import { BsArrowLeft } from 'react-icons/bs';

interface RouteParams {
  id: string;
}

export const JobPage = () => {
  const { id } = useParams<RouteParams>();
  const { data, isLoading, isError, error } = useGetOneJobQuery(id);
  if (isLoading) return <h1>'Loading...'</h1>;
  if (isError) {
    console.log(error);
    return (
      <h1>
        "Sorry, but we couldn't load data for you. Please refresh the page"
      </h1>
    );
  }
  console.log(data);
  const {title, company} = data!;
  return (
    <Wrapper>
        <StyledLink to='/' >
          <BsArrowLeft />
          <span>Back to search</span>
        </StyledLink>
      <div>
       <span className='apply'>How to apply</span> <br />
        Please email a copy of your resume and online portfolio to <span className='email'>{`${company}@gmail.com`}</span>
      </div>
      <div>
        Job page: {id}
        hello {data?.title}
        FRONT_eND SOFTWARE
      </div>
    </Wrapper>
  );
};

import React from 'react';
//components
import { JobCard } from 'components/JobCard/JobCard';
//hooks
import { useGetJobsQuery } from '../../store/jobs';
//styles
import { Wrapper } from './JobList.styles';

interface Props {
  search: string;
  isFullTime: boolean;
  location: string;
}

const JobsList = ({ search, isFullTime, location }: Props) => {
  const { data, isLoading, isError, error } = useGetJobsQuery({
    search,
    isFullTime,
    location,
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) {
    console.log(error);
    return (
      <h1>
        Note: This project used github-jobs API. Because this API was deprecated
        I had to use MSW. Unluckily, I cannot use MSW on production so to see
        results, you have to{' '}
        <a href="https://github.com/DonquixoteSabo/Github-Jobs">download</a>{' '}
        this project.
      </h1>
    )
  }
  return (
    <Wrapper>
      <ul>
        {data?.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </ul>
    </Wrapper>
  );
};

export { JobsList };

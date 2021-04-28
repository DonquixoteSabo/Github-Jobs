import React from 'react';
//components
import { JobCard } from 'components/JobCard/JobCard';
//hooks
import { useAppSelector } from 'hooks/reduxHook';

function JobsList() {
  const { jobs } = useAppSelector((state) => state.jobs);
  return (
    <>
      <div>Our list</div>
      <ul>
        {jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job.id} {...job} />)
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </>
  );
}

export { JobsList };

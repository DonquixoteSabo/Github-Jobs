import React, { useEffect } from 'react';
//components
import { JobCard } from 'components/JobCard/JobCard';
//hooks
import { useAppDispatch, useAppSelector } from 'hooks/reduxHook';
import { fetchAllJobs } from 'API/fetchAllJobs';
//styles
import { Wrapper } from './JobList.styles';

function JobsList() {
  const { filteredJobs: jobs } = useAppSelector((state) => state.jobs);
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      await dispatch(fetchAllJobs());
    })();
  }, [dispatch]);
  return (
    <Wrapper>
      <ul>
        {jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job.id} {...job} />)
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </Wrapper>
  );
}

export { JobsList };

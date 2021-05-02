import React, { useEffect } from 'react';
//components
import { JobCard } from 'components/JobCard/JobCard';
//hooks
import { useAppDispatch, useAppSelector } from 'hooks/reduxHook';
import { fetchAllJobs } from 'API/fetchAllJobs';

function JobsList() {
  const { jobs } = useAppSelector((state) => state.jobs);
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      await dispatch(fetchAllJobs());
    })();
  }, [dispatch]);
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

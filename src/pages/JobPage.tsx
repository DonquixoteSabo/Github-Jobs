import React from 'react';
import { useParams } from 'react-router-dom';
//hooks
import { useGetOneJobQuery } from '../store/jobs';

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
  return (
    <div>
      Job page: {id}
      hello {data?.title}
    </div>
  );
};

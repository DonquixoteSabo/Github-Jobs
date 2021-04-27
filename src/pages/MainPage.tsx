import React from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHook';
import { addJob } from 'redux/reducers';

function MainPage() {
  const { jobs } = useAppSelector((state) => state.jobs);
  const dispatch = useAppDispatch();
  console.log(jobs);
  return (
    <>
      <SearchBar />
      <div onClick={() => dispatch(addJob())}>Our Main Page</div>;
    </>
  );
}

export { MainPage };

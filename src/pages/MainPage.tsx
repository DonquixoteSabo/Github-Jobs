import React from 'react';
//components
import { SearchBar } from 'components/SearchBar/SearchBar';
import { JobsList } from 'components/JobsList/JobsList';
function MainPage() {
  return (
    <>
      <SearchBar />
      <JobsList />
    </>
  );
}

export { MainPage };

import React, { useState } from 'react';
//components
import { SearchBar } from 'components/SearchBar/SearchBar';
import { JobsList } from 'components/JobsList/JobsList';
import { Filters } from 'components/Filters/Filters';
//styles
import { Wrapper } from './MainPage.styles';

function MainPage() {
  const [search, setSearch] = useState('');
  const dispatchJobs = (job: string) => setSearch(job);
  return (
    <Wrapper>
      <SearchBar dispatchJobs={dispatchJobs} />
      <Filters />
      <JobsList search={search} />
    </Wrapper>
  );
}

export { MainPage };

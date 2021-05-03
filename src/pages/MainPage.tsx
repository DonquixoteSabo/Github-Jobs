import React from 'react';
//components
import { SearchBar } from 'components/SearchBar/SearchBar';
import { JobsList } from 'components/JobsList/JobsList';
import { Filters } from 'components/Filters/Filters';
//styles
import { Wrapper } from './MainPage.styles';

function MainPage() {
  return (
    <Wrapper>
      <SearchBar />
      <Filters />
      <JobsList />
    </Wrapper>
  );
}

export { MainPage };

import React, { useState } from 'react';
//components
import { SearchBar } from 'components/SearchBar/SearchBar';
import { JobsList } from 'components/JobsList/JobsList';
import { Filters } from 'components/Filters/Filters';
//styles
import { Wrapper } from './MainPage.styles';

function MainPage() {
  const [search, setSearch] = useState('');
  const [isFullTime, setIsFullTime] = useState(false);

  const dispatchIsFullTime = (value: boolean) => setIsFullTime(value);
  const dispatchSearch = (search: string) => setSearch(search);

  return (
    <Wrapper>
      <SearchBar dispatchSearch={dispatchSearch} />
      <Filters
        isFullTime={isFullTime}
        dispatchIsFullTime={dispatchIsFullTime}
      />
      <JobsList search={search} isFullTime={isFullTime} />
    </Wrapper>
  );
}

export { MainPage };

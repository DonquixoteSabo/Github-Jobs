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
  const [location, setLocation] = useState('');
  console.log(location);

  const dispatchIsFullTime = (value: boolean) => setIsFullTime(value);
  const dispatchSearch = (search: string) => setSearch(search);
  const dispatchLocation = (location: string) => setLocation(location);

  return (
    <Wrapper>
      <SearchBar dispatchSearch={dispatchSearch} />
      <Filters
        isFullTime={isFullTime}
        location={location}
        dispatchIsFullTime={dispatchIsFullTime}
        dispatchLocation={dispatchLocation}
      />
      <JobsList search={search} isFullTime={isFullTime} />
    </Wrapper>
  );
}

export { MainPage };

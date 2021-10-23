import React, { useEffect, useState } from 'react';
//components
import { SearchBar } from 'components/SearchBar/SearchBar';
import { JobsList } from 'components/JobsList/JobsList';
import { Filters } from 'components/Filters/Filters';
//styles
import { Wrapper } from './MainPage.styles';

function MainPage() {
  const [search, setSearch] = useState('');

  const handleSearch = (search: string) => setSearch(search);

  return (
    <Wrapper>
      <SearchBar handleSearch={handleSearch} />
      <Filters />
      <JobsList search={search} />
    </Wrapper>
  );
}

export { MainPage };

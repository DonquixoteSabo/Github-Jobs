import React, { useEffect } from 'react';
import axios from 'axios';
import { SearchBar } from 'components/SearchBar/SearchBar';

const CORS_ANYWHERE = 'https://cors-anywhere.herokuapp.com/';

function MainPage() {
  useEffect(() => {
    (async () => {
      const result = await axios.get(
        `${CORS_ANYWHERE}https://jobs.github.com/positions.json?&page=1`
      );
      const { data: jobs } = result;
      console.log(jobs);
    })();
  }, []);
  return (
    <>
      <SearchBar />
      <div>Our Main Page</div>;
    </>
  );
}

export { MainPage };

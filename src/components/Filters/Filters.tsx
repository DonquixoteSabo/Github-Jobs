import React from 'react';
//components
import { FullTime } from 'components/FullTime/FullTime';
import { LocationFilter } from 'components/LocationFilter/LocationFilter';
//style
import { Wrapper } from './Filters.style';

interface Props {
  isFullTime: boolean;
  location: string;
  dispatchIsFullTime: (v: boolean) => void;
  dispatchLocation: (v: string) => void;
}

const Filters = ({
  location,
  isFullTime,
  dispatchIsFullTime,
  dispatchLocation,
}: Props) => {
  return (
    <Wrapper>
      <FullTime
        dispatchIsFullTime={dispatchIsFullTime}
        isFullTime={isFullTime}
      />
      <LocationFilter location={location} dispatchLocation={dispatchLocation} />
    </Wrapper>
  );
};

export { Filters };

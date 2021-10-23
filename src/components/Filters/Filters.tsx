import React from 'react';
//components
import { FullTime } from 'components/FullTime/FullTime';
import { LocationFilter } from 'components/LocationFilter/LocationFilter';

import styled from 'styled-components';

export const Wrapper = styled.section`
  grid-template-columns: 1/-1;
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    grid-template-columns: 1/2;
    grid-row: 2/3;
  }
`;

interface Props {
  dispatchIsFullTime: (v: boolean) => void;
  isFullTime: boolean;
}

const Filters = (props: Props) => {
  return (
    <Wrapper>
      <FullTime {...props} />
      <LocationFilter />
    </Wrapper>
  );
};

export { Filters };

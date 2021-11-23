import React, { useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash';
//styles
import { Input } from 'components/Input';
import { Form, Title } from './LocationFilter.styles';
//icons
import { BiWorld } from 'react-icons/bi';

interface Props {
  location: string;
  dispatchLocation: (v: string) => void;
}

const LocationFilter = ({ location, dispatchLocation }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const debouncedLocation = useMemo(
    () =>
      debounce((val) => {
        dispatchLocation(val);
      }, 400),
    [dispatchLocation]
  );

  useEffect(
    () => debouncedLocation(inputValue),
    [inputValue, debouncedLocation]
  );

  return (
    <>
      <Title>Location</Title>
      <Form>
        <div>
          <BiWorld className="icon" />
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="City"
          />
        </div>
      </Form>
    </>
  );
};

export { LocationFilter };

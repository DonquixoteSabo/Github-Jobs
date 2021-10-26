import React, { useCallback, useEffect, useState } from 'react';
import _ from 'lodash';
//styles
import { Wrapper } from './SearchBar.styles';
import { Input } from 'components/Input';
//icons
import { BiShoppingBag } from 'react-icons/bi';

interface Props {
  dispatchSearch: (arg: string) => void;
}

const SearchBar = ({ dispatchSearch }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const debounce = useCallback(
    _.debounce((searchVal: string) => {
      dispatchSearch(searchVal);
    }, 1000),
    []
  );

  useEffect(() => debounce(inputValue), [inputValue]);

  return (
    <Wrapper>
      <form className="input-wrapper" role="search">
        <div>
          <BiShoppingBag className="icon" />
          <Input
            type="text"
            placeholder="Title, companies"
            value={inputValue}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(event.target.value)
            }
          />
        </div>
      </form>
    </Wrapper>
  );
};

export { SearchBar };

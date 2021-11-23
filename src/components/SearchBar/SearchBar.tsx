import React, { useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash';
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

  const debouncedSearch = useMemo(
    () =>
      debounce((val) => {
        dispatchSearch(val);
      }, 400),
    [dispatchSearch]
  );

  useEffect(() => debouncedSearch(inputValue), [inputValue, debouncedSearch]);

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

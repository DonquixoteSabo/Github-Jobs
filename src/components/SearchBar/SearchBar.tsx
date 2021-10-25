import React, { useState } from 'react';
//styles
import { Wrapper, Button } from './SearchBar.styles';
import { Input } from 'components/Input';
//icons
import { BiShoppingBag } from 'react-icons/bi';

interface Props {
  dispatchSearch: (arg: string) => void;
}

// TODO use debounce like in locationFilter instead of button

const SearchBar = ({ dispatchSearch }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatchSearch(inputValue);
    setInputValue('');
  };
  return (
    <Wrapper>
      <form className="input-wrapper" onSubmit={handleSubmit} role="search">
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
        <Button type="submit">Search</Button>
      </form>
    </Wrapper>
  );
};

export { SearchBar };

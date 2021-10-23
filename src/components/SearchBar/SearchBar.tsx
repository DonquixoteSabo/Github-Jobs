import React, { useState } from 'react';
//styles
import { Wrapper, Button } from './SearchBar.styles';
import { Input } from 'components/Input';
//icons
import { BiShoppingBag } from 'react-icons/bi';

interface Props {
  handleSearch: (arg: string) => void;
}

const SearchBar = ({ handleSearch }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch(inputValue);
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

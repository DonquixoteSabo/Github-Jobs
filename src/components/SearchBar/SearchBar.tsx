import React, { useState } from 'react';
//styles
import { Wrapper, Button } from './SearchBar.styles';
import { Input } from 'components/Input';
//icons
import { BiShoppingBag } from 'react-icons/bi';
//redux-setup
import { useAppDispatch } from 'hooks/reduxHook';
import { filterJobs } from 'redux/actions';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(filterJobs(inputValue));
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

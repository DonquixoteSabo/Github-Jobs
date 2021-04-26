import React, { useState } from 'react';

import styled from 'styled-components';
export const Wrapper = styled.section``;
export const Input = styled.input``;
export const Button = styled.button``;

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);
    setInputValue('');
  };
  return (
    <Wrapper>
      <form className="input-wrapper" onSubmit={handleSubmit} role="search">
        <Input
          type="text"
          placeholder="Title, companies"
          value={inputValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(event.target.value)
          }
        />
        <Button type="submit">Search</Button>
      </form>
    </Wrapper>
  );
};

export { SearchBar };

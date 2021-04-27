import React, { useState } from 'react';

import styled from 'styled-components';
import backgroundImg from 'assets/img/backgroundImg.png';
export const Wrapper = styled.section`
  width: 100%;
  height: 150px;
  background-image: url(${backgroundImg});
  background-size: cover;
`;
export const Input = styled.input``;
export const Button = styled.button``;

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(inputValue);
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

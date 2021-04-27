import React, { useState } from 'react';
import { BsBag } from 'react-icons/bs';

import styled from 'styled-components';
import backgroundImg from 'assets/img/backgroundImg.png';
export const Wrapper = styled.section`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  background-image: url(${backgroundImg});
  background-size: cover;
  border-radius: 8px;
  form {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    div {
      display: flex;
      align-items: center;
      margin-left: 20px;
      width: 100%;
    }
  }
`;

export const Input = styled.input`
  padding: 15px 20px;
  border: none;
  outline: none;
  width: 100%;
  &::placeholder {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.heather};
  }
`;
export const Button = styled.button`
  padding: 12px 25px;
  margin-right: 5px;
  font-weight: 500;
  border: none;
  background-color: ${({ theme }) => theme.colors.blue};
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
`;

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
        <div>
          <BsBag />
          <Input
            type="text"
            placeholder="Title, companies, expertise or benefits"
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

import styled from 'styled-components';

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
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 20px 25px;
    &::placeholder {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;

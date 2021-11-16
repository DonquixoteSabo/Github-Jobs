import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 280px;
  justify-content: space-between;
  margin-bottom: 20px;

  div {
    width: 90%;
    display: flex;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;

    .icon {
      color: ${({ theme }) => theme.colors.heather100};
      font-weight: 400;
      font-size: ${({ theme }) => theme.fontSize.xl};
      margin-left: 10px;
    }
  }
`;

export const Title = styled.header`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.m};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.heather100};
  margin: 30px 0 10px;
`;

import styled from 'styled-components';

interface WrapperProps {
  margin: number;
}

const Wrapper = styled.div<WrapperProps>`
  width: 75px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.chambray};
  border-radius: 4px;
  font-family: Roboto, Poppins, sans-serif;
  font-weight: 600;
  margin: ${(props) => (props ? `${props.margin}em 0` : 0)};

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 85px;
    height: 30px;
  }
`;
 
interface Props {
  type?: string;
  margin?: number;
}

export const Type = ({ type = 'Full Time', margin = 0 }: Props) => (
  <Wrapper margin={margin}>{type}</Wrapper>
);
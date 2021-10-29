import React, { ReactNode } from 'react';
//components
import { Header } from 'components/Header/Header';
//styles
import { Wrapper } from './MainTemplate.styles';

export const MainTemplate = ({ children }: { children: ReactNode }) => (
  <Wrapper>
    <Header />
    {children}
  </Wrapper>
);

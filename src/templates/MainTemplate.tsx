import React, { ReactNode } from 'react';
//components
import Header from 'components/Header/Header';
//styles
import { Wrapper } from './MainTemplate.styles';

export function MainTemplate({ children }: { children: ReactNode }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

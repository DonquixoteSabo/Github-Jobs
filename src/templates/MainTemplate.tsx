import React, { ReactNode } from 'react';
//components
import { Header } from 'components/Header/Header';
//styles
import { Footer, Wrapper } from './MainTemplate.styles';

export const MainTemplate = ({ children }: { children: ReactNode }) => (
  <Wrapper>
    <Header />
    {children}
    <Footer>
      created by{' '}
      <a
        href="https://github.com/DonquixoteSabo"
        target="_blank"
        rel="noreferrer"
      >
        DonquixoteSabo
      </a>
      - devChallenges.io
    </Footer>
  </Wrapper>
);

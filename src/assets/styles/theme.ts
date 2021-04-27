// my-theme.ts
import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    blue: '#1E86FF',
    steelGray: '#282538',
    heather: '#B9BDCF',
  },
  fontSize: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '18px',
    xl: '24px',
  },
  breakpoints: {
    sm: '576px',
    m: '768px',
    l: '992px',
    xl: '1200px',
  },
};

export { theme };

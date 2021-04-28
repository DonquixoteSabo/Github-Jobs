// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: string;
      steelGray: string;
      heather: string;
      chambray: string;
    };
    fontSize: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
    breakpoints: {
      sm: string;
      m: string;
      l: string;
      xl: string;
    };
  }
}

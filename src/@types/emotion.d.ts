import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    fontSizes: {
      extraLarge: string;
      large: string;
      big: string;
      normal: string;
      small: string;
    };
    fontWeights: {
      thin: number;
      extraLight: number;
      light: number;
      regular: number;
      medium: number;
      bold: number;
      extraBold: number;
      heavy: number;
      black: number;
    };
  }
}

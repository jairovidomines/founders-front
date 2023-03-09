import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      primary: string;
    };
    colors: {
      backgroundColor: string;
      mainColorButton: string;
      mainFontColor: string;
      mainFontColorButton: string;
    };
  }
}

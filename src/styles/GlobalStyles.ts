import "@fontsource/inter";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*, 
*:after,
*:before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  }

body {
  background-color: ${(props) => props.theme.colors.backgroundColor};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 300;
  width: 100%;
  min-height: 100vh;
  color: ${(props) => props.theme.colors.mainFontColor};
}

.container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

input {
  border: none;
}

ol, ul, li {
  list-style: none;
}

h1 {
  font-weight: 700;
}


button {
  border: none;
  border-radius: 5px;
  font-size: 18px;
  background-color: ${(props) => props.theme.colors.mainColorButton};
  color: ${(props) => props.theme.colors.mainFontColorButton};
}

`;

export default GlobalStyles;

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
  background-color: #fff;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  width: 100%;
  min-height: 100vh;
  color: #000;
}

.container {
  padding: 20px;

}

input {
  border: none;
}

ol, ul, li {
  list-style: none;
}

h1, h2 {
  font-weight: 700;
}


button {
  border: none;
  border-radius: 5px;

  color: #fff;
}

a,
a:active,
a:visited {
  color: inherit;
  text-decoration: none;
}

`;

export default GlobalStyles;

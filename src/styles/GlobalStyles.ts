import "@fontsource/inter";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --background-color: #fff;
  --main-color-button: #3f5e46;
  --main-color-button-disabled: 57%;
  --main-font: "Inter", sans-serif;
  --main-font-color: #000;
  --main-font-color-button: #fff;
}

*, 
*:after,
*:before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  }

body {
  background-color: var(--background-color);
  font-family: var(--main-font);
  font-weight: 300;
  width: 100%;
  min-height: 100vh;
  color: var(--main-font-color);
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
  background-color: var(--main-color-button);
  color: var(--main-font-color-button);
}

`;

export default GlobalStyles;

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #ddeefc;
    font-family: "Source Sans Pro", sans-serif;
  }
`;

export default GlobalStyles;

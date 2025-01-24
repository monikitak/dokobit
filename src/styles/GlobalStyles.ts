import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #F5F5F5;
    font-family: "Roboto", serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    color: #1A1A1A;
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 27.95px;
  }

  button,
  input {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    margin: 0;
  }

  button {
    -webkit-appearance: none;
    border-radius: 0;
    text-align: inherit;
    box-shadow: none;
    padding: 0;
    cursor: pointer;
    border: none;
    color: inherit;
    background-color:none;
  }
`;

export default GlobalStyles;

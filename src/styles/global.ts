import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;

    box-sizing: border-box;

    font-family: sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  #root {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    background: #f4f4f6;
  }
`;

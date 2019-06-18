import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Lato');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #ECF0F1;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Lato', sans-serif;
  }

  html, body, #root{
    height:100%;

  }

  input, button{
    font-family: 'Lato', sans-serif;
  }

  button{
    cursor:pointer;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #FFF;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root{
    height:100vh;
    width: 100vw;
  }
  a{
    text-decoration:none;
    color: inherit
  }
  a:visited{ color: inherit }
  input, button{
    font-family: 'Lato', sans-serif;
  }

  button{
    cursor:pointer;
  }
`;

export default GlobalStyle;

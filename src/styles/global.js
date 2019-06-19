import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
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

import "@fontsource/exo-2/400.css";
import "@fontsource/exo-2/500.css";
import "@fontsource/exo-2/600.css";
import "@fontsource/exo-2/700.css";
import { normalize } from "polished";
import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html {
    box-sizing: border-box;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    overflow: hidden;
    
    /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
    font-family: "Exo 2";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

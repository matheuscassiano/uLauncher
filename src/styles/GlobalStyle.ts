import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #E1E1E6;
    /* -webkit-user-select: none; */
    -webkit-app-region: drag;
  }

  .titlebar-button, input, ul, li {
    -webkit-app-region: no-drag;
  }
`

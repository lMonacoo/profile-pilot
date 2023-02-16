import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #0d1117;
  }

  * {
    box-sizing: border-box;
  }

  p, h1, h2, h3, h4, h5, h6, ul, ol, li, a, button {
    margin: 0;
    padding: 0;
    font-family: "Inter"
  }

  ul, li {
    list-style: none;
  }
`

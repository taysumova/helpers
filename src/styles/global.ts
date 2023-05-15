import { createGlobalStyle } from '@core/styled';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { baseTheme } from './theme';

export default createGlobalStyle`
  @font-face {
    font-family: 'Aeonik Pro';
    src: url("/fonts/AeonikPro/AeonikProTRIAL-Regular.woff2") format("woff2"),
    url('/fonts/AeonikPro/AeonikProTRIAL-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow: hidden;
  }

  body {
    font-family: ${baseTheme.fonts.main};
    font-weight: 400;
    font-style: normal;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

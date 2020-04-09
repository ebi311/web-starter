import { createGlobalStyle } from 'styled-components';
import theme from './Theme';

export const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${theme.background};
    color: ${theme.foreground};
    font-size: ${theme.fontSize}px;
    font-family: 'BIZ UDPGothic', 'Meiryo UI', 'Yu Gothic', Verdana, Arial, Helvetica, Roboto, sans-serif;
  }
  html, body, div, p {
    margin: 0;
    padding: 0;
  }
  :focus {
    outline: none;
  }
    /*スクロールバー全体*/
  ::-webkit-scrollbar {
    width: 4px;
  }
  /*スクロールバーの軌道*/
  ::-webkit-scrollbar-track-piece {
  }

  /*スクロールバーの動く部分*/
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.surface1};
    border-radius: 2px;
  }

`;

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
  ${reset} 
    html,body {
      width:100%;
      height: 100%;
      line-height: 1.7;
    }
    body {
      font-family: 'pretendard';
      white-space: nowrap;
      background-color: #FFFFFF;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
      }
    input, textarea { 
      font-family: 'pretendard';
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input:focus {    
      outline: none;
    }

    button {    
      font-family: 'pretendard';
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
`;

export default GlobalStyles;

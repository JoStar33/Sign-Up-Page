import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'pretendard/dist/web/static/pretendard.css';

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --vh: 100%;
   }
  * {
    box-sizing: border-box;
    -webkit-touch-callout: none; //link Long touch 막기
    -webkit-tap-highlight-color : transparent !important; //버튼 Touch 시 나오는 음영 지우기
  }
  html,

  body {
    font-family: Pretendard, PretendardVariable, sans-serif;
    padding: 0;
    margin: 0;
    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-track {
      border: none;
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #c4c4c4;
      border-radius: 10px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, textarea { 
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: 0;
    resize: none;
    outline: none;
  }

  input[type='text']{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
    border: none;
    color: #333;
  }
  input:focus {
    outline: none;
  }
  select:focus {
    outline: none;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    * {
      user-select: none;
      -webkit-user-select: none;
    }
  }

`;

export default GlobalStyle;

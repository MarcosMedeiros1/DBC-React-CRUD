import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Mulish", sans-serif;
  };

  button{
    background-color: #3751FF;
    color: #fff;
    font-size: 14px;
    border-radius: 8px;
    padding: 16px 32px;
    cursor: pointer;
    border: none;
    box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
    transition: 0.2s;
    &:hover{
    transform: scale(1.02);
    }
  }
`;

export default GlobalStyle;
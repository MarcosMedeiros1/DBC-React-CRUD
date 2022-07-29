import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../utils/Colors";

export const AsideContainer = styled.aside`
  background-color: #363740;
  display: grid;
  align-content: start;
  gap: 64px;
`

export const Ul = styled.ul`
  display: grid;
  border-bottom: 1px solid #DFE0EB;
  list-style: none;

  & li{
    padding: 18px 0;
    border-left: 3px solid transparent;
  }

  & li:hover{
    background-color: #3E4049;
    border-left: 3px solid #DDE2FF;
    & a{
      color: #DDE2FF;
    }
  }
  
  & a{
    color: #A4A6B3;
    text-decoration: none;
    padding: 18px 13rem 18px 16px;
  }
`

export const LogoContainer = styled.div`
padding-top: 32px;
display: flex;
justify-content: center;

  & svg{
    margin-right: 12px;
    background-color: ${secondaryColor};
    border-radius: 100%;
  }

  & span{
    color: #A4A6B3;
  }

  & a{
    text-decoration: none;
    display: flex;
    align-items: center;
    color: ${primaryColor};
  }
`
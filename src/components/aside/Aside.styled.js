import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../utils/colors";

export const AsideContainer = styled.aside`
  display: grid;
  align-content: start;
  gap: 48px;
  height: 100%;
  background-color: #363740;
`

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
`

export const Ul = styled.ul`
  display: grid;
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
import styled from "styled-components";
import { backgroundDark, primaryColor, secondaryColor } from "../../utils/colors";

export const DefaultButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${secondaryColor};
  color: ${primaryColor};
  font-size: 1.1rem;
  border: none;
  /* border: 1px solid #000; */

  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: 0.2s;
  
  &:hover{
  /* background-color: #9FA2B4; */
  color: ${(props) => props.hoverColor};
  box-shadow: none;
  }
`

export const ButtonPrimary = styled.button`
  background-color: ${primaryColor};
  color: ${secondaryColor};
  font-size: 14px;
  border: 1px solid ${primaryColor};
  border-radius: 8px;
  padding: ${(props) => props.padding};
  cursor: pointer;
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  transition: 0.2s;
  
  &:hover{
  background-color: ${secondaryColor};
  color: ${primaryColor};
  box-shadow: none;
  }
`

export const ButtonSecondary = styled.button`
  background-color: ${secondaryColor};
  color: ${primaryColor};
  font-size: 14px;
  border: 1px solid ${primaryColor};
  border-radius: 8px;
  padding: ${(props) => props.padding};
  cursor: pointer;
  box-shadow: none;
  transition: 0.2s;
  
  &:hover{
  background-color: ${primaryColor};
  color: ${secondaryColor};
  box-shadow:  0px 4px 12px rgba(55, 81, 255, 0.24);
  }
`
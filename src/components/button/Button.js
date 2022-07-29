import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../utils/Colors";

export const ButtonPrimary = styled.button`
  background-color: ${primaryColor};
  color: ${secondaryColor};
  font-size: 14px;
  border-radius: 8px;
  padding: ${(props) => props.padding};
  cursor: pointer;
  border: 1px solid ${primaryColor};
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
  border-radius: 8px;
  padding: ${(props) => props.padding};
  cursor: pointer;
  border: 1px solid ${primaryColor};
  box-shadow: none;
  transition: 0.2s;
  
  &:hover{
  background-color: ${primaryColor};
  color: ${secondaryColor};
  box-shadow:  0px 4px 12px rgba(55, 81, 255, 0.24);
  }
`
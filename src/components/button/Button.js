import styled from "styled-components";

export const ButtonPrimary = styled.button`
  background-color: #3751FF;
  color: #fff;
  font-size: 14px;
  border-radius: 8px;
  padding: ${(props) => props.padding};
  cursor: pointer;
  border: 1px solid #3751FF;
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  transition: 0.2s;
  
  &:hover{
  background-color: #fff;
  color: #3751FF;
  box-shadow: none;
  }
`

export const ButtonSecondary = styled.button`
  background-color: #fff;
  color: #3751FF;
  font-size: 14px;
  border-radius: 8px;
  padding: ${(props) => props.padding};
  cursor: pointer;
  border: 1px solid #3751FF;
  box-shadow: none;
  transition: 0.2s;
  
  &:hover{
  background-color: #3751FF;
  color: #fff;
  box-shadow:  0px 4px 12px rgba(55, 81, 255, 0.24);
  }
`
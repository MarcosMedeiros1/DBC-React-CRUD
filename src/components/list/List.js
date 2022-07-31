import styled from "styled-components";
import { backgroundDark, backgroundLight } from "../../utils/utils";

export const ContainerList = styled.section`
  display: grid;
  justify-content: center;
  align-content: start;
  gap: 32px;
  padding: 32px;
  height: 100%;
  background-color: ${backgroundDark};

  & h2{
  color: #fff;
  text-align: center;
  }

  @media (max-width: 425px){
    padding: 0;
  }
`

export const List = styled.div`
  display: grid;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #DFE0EB;
`

export const ListAdd = styled.div`
  display: flex;
  justify-content: center;
`

export const ListItem = styled.li`
  display: grid;
  align-items: center;
  gap: 24px;
  grid-template-columns: 1fr;
  padding: 24px;
  border-top: 1px solid #DFE0EB;
  list-style: none;

  :hover{
    background-color: ${backgroundLight};
  }
  
  :first-child{
    border-radius: 8px 8px 0 0;
    border-top: none;
  }

  :last-child{
    border-radius: 0 0 8px 8px;
  }

  & div{
    display: flex;
    align-items: center;
    gap: 16px;
  }
`
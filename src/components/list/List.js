import styled from "styled-components";
import { backgroundDark, backgroundLight, textLight } from "../../utils/utils";

export const ContainerList = styled.section`
  display: grid;
  justify-content: ${(props) => props.justify};
  align-content: start;
  gap: 32px;
  padding: 32px;
  height: 100%;
  background-color: ${backgroundDark};

  & h2{
  color: #fff;
  text-align: center;
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

export const ListHeader = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  color: ${textLight};
  padding: 16px 24px;
  border-bottom: 1px solid #DFE0EB;

`

export const ListItem = styled.li`
  display: grid;
  align-items: center;
  gap: 24px;
  grid-template-columns: ${(props) => props.columns};
  padding: 24px;
  border-top: 1px solid #DFE0EB;
  list-style: none;

  :hover{
    background-color: ${backgroundLight};
  }
  
  :first-child{
    border-top: none;
    border-radius: 8px 8px 0 0;
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

export const InfoPerson = styled.span`
  /* max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
  line-break: auto;
`

export const InfoAddress = styled.span`
  line-break: auto;
`
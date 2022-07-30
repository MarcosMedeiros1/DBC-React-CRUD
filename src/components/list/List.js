import styled from "styled-components";
import { backgroundLight, textLight } from "../../utils/colors";

export const ContainerList = styled.section`
  display: grid;
  justify-content: center;
  gap: 32px;
  padding: 24px 32px;
  background-color: ${backgroundLight};
`

export const List = styled.div`
  display: grid;
  justify-content: center;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #DFE0EB;
`

export const ListTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
`

export const ListHeader = styled.div`
  display: grid;
  align-content: center;
  color: ${textLight};
  gap: 24px;
  padding: 16px;
  grid-template-columns: repeat(5, 1fr);
`

export const ListItem = styled.li`
  display: grid;
  align-items: center;
  gap: 24px;
  grid-template-columns: repeat(5, 1fr);
  padding: 24px 16px 24px;
  border-top: 1px solid #DFE0EB;

  :hover{
    background-color: ${backgroundLight};
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
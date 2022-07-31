import styled from "styled-components";
import { backgroundLight, textLight } from "../../utils/colors";

export const ContainerList = styled.section`
  display: grid;
  justify-content: center;
  align-content: start;
  gap: 32px;
  padding: 24px 32px;
  height: 100%;
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
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  color: ${textLight};
  padding: 16px;
  border-bottom: 1px solid #DFE0EB;

`

export const ListItem = styled.li`
  display: grid;
  align-items: center;
  gap: 24px;
  grid-template-columns: ${(props) => props.columns};
  padding: 24px 16px 24px;
  border-top: 1px solid #DFE0EB;
  list-style: none;

  :hover{
    background-color: ${backgroundLight};
  }
  
  :first-child{
    border-top: none;
  }

  :last-child{
    border-radius: 0 0 8px 8px;
  }

& div{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}
`

export const InfoPerson = styled.span`
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const InfoAddress = styled.span`
  min-width: 320px;
  line-break: auto;
`
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

export const ListItem = styled.li`
  display: ${(props) => props.display};
  align-items: center;
  gap: 24px;
  grid-template-columns: repeat(5, 1fr);
  padding: 24px 16px 24px;
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
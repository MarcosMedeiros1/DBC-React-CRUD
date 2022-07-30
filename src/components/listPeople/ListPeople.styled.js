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
padding: 16px 0;
justify-content: center;
border-radius: 8px;
background-color: #fff;
`

export const TitleList = styled.div`
  display: flex;
  gap: 64px;
  align-items: center;
  justify-content: space-between;
`

export const ListHeader = styled.div`
display: grid;
align-content: center;
color: ${textLight};
gap: 24px;
padding: 16px;
grid-template-columns: repeat(5, 1fr);
`

export const Ul = styled.ul`
  /* display: grid; */
  /* padding: 0 16px; */

  & li:hover{
  background-color: #F7F8FC;
}
`

export const ListItem = styled.li`
display: grid;
align-items: center;
gap: 24px;
grid-template-columns: repeat(5, 1fr);
padding: 24px 16px 24px;

& div{
  display: flex;
  align-items: center;
  gap: 16px;
}
`
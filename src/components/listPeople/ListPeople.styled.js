import styled from "styled-components";

export const ContainerList = styled.section`
display: grid;
justify-content: center;
padding: 24px 64px 24px 32px;
background-color: #F7F8FC;
`

export const List = styled.div`
display: grid;
gap: 32px;
padding: 16px;
justify-content: center;
background-color: #fff;
`

export const TitleList = styled.div`
  display: flex;
  gap: 64px;
  align-items: center;
  justify-content: space-between;
  /* padding: 0 16px; */
`

export const ListHeader = styled.div`
display: grid;
gap: 24px;
/* padding: 0 16px; */
grid-template-columns: repeat(5, 1fr);
`

export const Ul = styled.ul`
  display: grid;

  & li:hover{
  background-color: #F7F8FC;
}
`

export const ListItem = styled.li`
display: grid;
align-items: center;
gap: 24px;
grid-template-columns: repeat(5, 1fr);
padding: 24px 16px 24px 0;


& div{
  display: flex;
  gap: 16px;
}
`
import styled from "styled-components";

export const ContainerList = styled.section`
padding: 24px;
display: grid;
justify-content: center;
`

export const List = styled.ul`
display: grid;
gap: 20px;
list-style: none;
`

export const ListHeader = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
justify-items: center;
`

export const ListItem = styled.li`
display: grid;
grid-template-columns: repeat(5, 1fr);
`
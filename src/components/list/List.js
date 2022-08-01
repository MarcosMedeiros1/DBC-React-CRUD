import styled from "styled-components";
import { backgroundDark, backgroundLight, textLight } from "../../utils/utils";

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
    padding: 16px 0;
  }
`

export const List = styled.div`
  display: grid;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #DFE0EB;
`

export const ListHeader = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  color: ${textLight};
  padding: 16px 24px;
  border-bottom: 1px solid #DFE0EB;

  @media (max-width: 1024px) {
    display: none;
  }
`

export const ListAdd = styled.div`
  display: flex;
  justify-content: center;
`

export const ListItem = styled.li`
  display: grid;
  align-items: center;
  gap: 24px;
  grid-template-columns: ${(props) => props.columns};
  padding: 24px;
  border-top: 1px solid #DFE0EB;
  list-style: none;

  & strong {
      display: none;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;

    & strong {
      display: inline;
    }
   }

  @media (max-width: 767px) {
      grid-template-columns: 1fr;
  }
  

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

export const InfoPerson = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const InfoAddress = styled.span`
  & strong{
    display: inline;
  }
`
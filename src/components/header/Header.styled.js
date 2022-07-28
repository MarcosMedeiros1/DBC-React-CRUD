import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 32px;
  background-color: #fff;
`

export const LogoContainer = styled.div`
  background-color: #fff;
  border-radius: 100%;
  & a{
    display: flex;
    color: #000;
  }
`

export const Nav = styled.nav`
display: flex;
`

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  & a{
    text-decoration: none;
    color: #000;
    padding: 8px;
    border-radius: 8px;
    transition: 0.2s;
  }
  & a:hover{
    color: #fff;
    background-color: #363740;
  }
`
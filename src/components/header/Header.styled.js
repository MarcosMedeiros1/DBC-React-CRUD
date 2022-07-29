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

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: space-between;

  & a{
    text-decoration: none;
    color: #000;
    border-radius: 8px;
    transition: 0.2s;
    position: relative;
  }

  & a::after{
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    left: 0;
    bottom: 0;
    opacity: 0;
    transform: translateY(3px);
    background: #000;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  & a:hover::after{
    opacity: 1;
    transform: translateY(0);
  }
`



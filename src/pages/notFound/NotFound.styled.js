import styled from "styled-components";

export const StyledNotFound = styled.h1`
  display: grid;
  gap: 16px;
  justify-items: center;
  align-content: center;
  height: 100vh;

  & a{
    color: #000;
    text-decoration: none;
    position: relative;
  }

  & a::after{
    content: '';
    position: absolute;
    height: 2px;
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
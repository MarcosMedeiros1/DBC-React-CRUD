import styled from "styled-components"

export const Loading = styled.button`
  @keyframes donut-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  display: inline-block;
	border: 4px solid rgba(255, 255, 255, 0.1);
	border-left-color: #000;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	animation: donut-spin 1.2s linear infinite;
`

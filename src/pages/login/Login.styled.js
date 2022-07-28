import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 380px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #363740;
`

export const LoginDiv = styled.div`
  padding: 40px 32px;
  background-color: #fff;
  border-radius: 8px;

`

export const TitleDiv = styled.div`
display: grid;
gap: 12px;
margin-bottom: 48px;
text-align: center;
`

export const Title = styled.h1`
  color: #252733;
`;

export const SubTitle = styled.span`
 color: #9FA2B4;
`

export const FormDiv = styled.div`
  display: grid;
  gap: 24px;
`

export const FormItem = styled.div`
  display: grid;
  gap: 6px;
  color: #9FA2B4;
  & input{
    background-color: #FCFDFE;
    border: 1px solid #F0F1F7;
    border-radius: 8px;
    padding: 12px 16px;
  }
  & input::placeholder{
    color: #9FA2B4;
  }
`

export const ErrorMessage = styled.span`
  color: #F12B2C;
`
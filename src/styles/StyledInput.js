import styled from "styled-components";

export const StyledMyInput = styled.div`
  margin-bottom: 16px;
  input {
    background: #ffffff;
    border: 1px solid #ff5c00;
    border-radius: 50px;
    width: 302px;
    height: 48px;
    padding: 15px 24px;
  
    @media(max-width: 430px){
      width: 95%;
      padding: 10px 20px;
    }
  }
  
  ::placeholder {
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

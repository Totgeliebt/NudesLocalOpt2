import styled from "styled-components";

export const StyledLoader = styled.div`
  width: 100%;
  height: 100%;
  background: #fffae9;
  .content {
    max-width: 1440px;
    margin: 0 auto;
    padding: 50px;
    display: flex;
    justify-content: center;
  }
  .lottie {
    width: 300px;
    height: 300px;
    @media(max-width: 430px){
      width: 100px;
      height: 100px;
    }
  }
`;

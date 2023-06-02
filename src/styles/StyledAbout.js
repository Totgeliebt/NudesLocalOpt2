import styled from "styled-components";

export const StyledAbout = styled.div`
  width: 100vw;
  background: #fffae9;
  padding: 0 140px;
  @media (max-width: 430px) {
    padding: 8px;
  }
  .about_content {
    max-width: 1440px;
    margin: 0 auto;
    padding: 37px 0 46px;
    @media (max-width: 430px) {
     width: 350px;
      padding-right: 5px;
    }
  }

  ul {
    display: flex;
    list-style-type: none;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    margin-bottom: 66px;
    @media (max-width: 430px) {
      justify-content: center;
      margin-bottom: 36px;
    }
  }
  ul li {
    margin-right: 34px;
    @media (max-width: 430px) {
      margin-right: 20px;
    }
  }
`;
export const StyledPolicy = styled.div`
  color: #000000;
  h3 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 12px;
    @media (max-width: 430px) {
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
    }
  }
  h4 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    color: #000000;
    @media (max-width: 430px) {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }
  }
  ol {
    list-style-type: none;
  }
  ol li {
    margin-left: 40px;
    margin-bottom: 16px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #333333;
    @media (max-width: 430px) {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 10px;
    }
  }

  p {
    margin-bottom: 26px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #333333;
    @media (max-width: 430px) {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 16px;
    }
  }
  p:last-child {
    margin-bottom: 0;
  }
`;

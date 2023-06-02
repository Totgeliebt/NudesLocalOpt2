import styled from "styled-components";

export const StyledMyButton = styled.button`
  background: #ff5c00;
  border: 2px solid #ff5c00;
  border-radius: 52px;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  padding: 15px 20px;
  width: 386px;
  @media (max-width: 430px) {
    height: 38px;
    white-space: nowrap;
    width: 80%;
    font-weight: 500;
    font-size: 12px;
    padding: 2px 6px;
  }
  :hover {
    cursor: pointer;
    background-color: white;
    color: black;
  }
  :disabled {
    cursor: not-allowed;
  }
`;

export const StyledPopupButton = styled(StyledMyButton)`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  height: 48px;
  width: 302px;
  @media (max-width: 430px) {
    width: 95%;
    padding: 10px 20px;
  }
`;

export const StyledPayButton = styled(StyledMyButton)`
  font-weight: 600;
  font-size: 35px;
  line-height: 43px;
  height: 108px;
  width: 427px;
  margin: 50px;
  @media (max-width: 430px) {
    height: 60px;
    width: 207px;
    margin: 0;
    font-weight: 500;
    font-size: 28px;
    line-height: 35px;
  }
`;


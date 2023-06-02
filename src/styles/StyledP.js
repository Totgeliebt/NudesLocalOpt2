import styled from "styled-components";

export const StyledP = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #333333;
  margin-bottom: 16px;
  @media (max-width: 430px) {
    font-size: 16px;
    line-height: 19px;
  }
`

export const StyledPCreate = styled(StyledP)`
  margin-bottom: 26px;
  width: 350px;
`

export const StyledPHow = styled(StyledP)`
  width: 259px;
  font-size: 24px;
  line-height: 28px;
  @media (max-width: 430px) {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 28px;
  }
`
export const StyledRegex = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  opacity: 0.6;
  margin-left: 10px;
  transform: translateY(-10px);
  position: relative;
  span{
    position: absolute;
    top: -25px;
    right: 30px
  }
  .red{
    color: #E11010;
  }
  .green{
    color: #26920C;
  }
`
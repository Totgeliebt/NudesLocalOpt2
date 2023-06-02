import styled from "styled-components";

export const StyledH1 = styled.h1`
  font-family: "Montserrat", sans-serif;
  margin-bottom: 98px;
  font-weight: 700;
  font-size: 64px;
  line-height: 78px;
  color: #000000;
  @media(max-width: 430px){
    text-align: center;
    margin-bottom: 38px;
    font-weight: 600;
    font-size: 42px;
    line-height: 50px;
  }
`

export const StyledH1Deposit = styled(StyledH1)`
  margin-bottom: 85px;
  @media(max-width: 430px){
    padding-bottom: 26px;
  }
`
export const StyledH1Create = styled(StyledH1)`
  margin-bottom: 56px;
`
export const StyledH1Photos = styled(StyledH1)`
  margin-top: 13px;
  @media(max-width: 430px){
    padding-bottom: 26px;
    margin-top: 0;
  }
`
export const StyledH1Landing = styled(StyledH1)`
  margin-bottom: 0;
  @media(max-width: 430px){
    margin-bottom: 10px;
  }
`
export const StyledH1Media = styled(StyledH1)`
  margin-bottom: 35px;
  @media(max-width: 430px){
    margin: 25px 5px 15px;
  }
`
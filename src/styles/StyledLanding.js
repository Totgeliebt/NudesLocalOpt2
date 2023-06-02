import styled from "styled-components";

export const StyledLandingContent = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1440px;
  @media (min-width: 375px) {
    min-width: 375px;
  }
`;
export const StyledGeneral = styled.section`
  width: 100%;
  height: 100%;
  background-color: #fffae9;
  .content {
    max-width: 1440px;
    margin: 0 auto;
    padding: 37px 0 46px 15px;
    @media (max-width: 430px) {
      width: 360px;
      padding: 37px 0 46px 5px;;
    }
  }
  .block_container {
    display: flex;
    margin-bottom: 19px;
    @media (max-width: 430px) {
      width: 360px;
    }
  }
  .block_subheader {
    @media (max-width: 430px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .ai-descr {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 42px;
    margin-bottom: 19px;
    @media (max-width: 430px) {
      font-size: 24px;
      line-height: 34px;
      text-align: center;
      margin-bottom: 35px;
    }
  }

  .photos {
    min-width: 300px;
    margin-left: 30px;
    height: 469px;
    @media (max-width: 430px) {
      display: none;
    }
  }
  .number {
    font-family: "Montserrat", sans-serif;
    color: #000000;
    font-weight: 700;
    font-size: 64px;
    line-height: 78px;
    @media (max-width: 430px) {
      font-size: 44px;
      font-weight: 500;
      line-height: 58px;
      text-align: center;
      margin-top: 40px;
    }
  }
  .since_covid {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #333333;
    @media (max-width: 430px) {
      font-size: 15px;
      text-align: center;
      margin: 0 40px;
    }
  }
`;

export const StyledAi = styled.section`
  padding: 35px 142px;
  max-width: 1440px;
  margin: 0 auto;
  height: 550px;
  @media (max-width: 430px) {
    height: 100%;
    padding: 0;
    margin-top: 180px;
    width: 360px;
  }
  .block_container {
    display: flex;
    flex-direction: row-reverse;
    @media (max-width: 430px) {
      flex-direction: column;
    }
  }

  span {
    color: #ff5c00;
  }
  .text_content {
    flex: 1;
    margin-left: 50px;
    @media (max-width: 430px) {
      flex: none;
      margin: 10px;
    }
  }
  .text_content img {
    @media (max-width: 430px) {
      width: 30px;
      height: 30px;
    }
  }
  .images {
    width: 50%;
    position: relative;
    margin-right: 50px;
    @media (max-width: 430px) {
      flex: none;
      margin: 5px;
      height: 0;
    }
  }
  .all {
    border-radius: 6px;
  }
  .pic-1 {
    width: 335px;
    height: 222px;
    position:absolute;
    top: 0;
    left: -20%;
    //transform: translate(0px, -55px);
    @media (max-width: 430px) {
      width: 195px;
      height: 112px;
      transform: translate(10px, -470px);
    }
  }
  .pic-2 {
    width: 304px;
    height: 224px;
    position:absolute;
    top: 35%;
    right: 5%;
    //transform: translate(260px, -180px);
    @media (max-width: 430px) {
      width: 195px;
      height: 112px;
      transform: translate(160px, -430px);
    }
  }
  .pic-3 {
    width: 197px;
    height: 197px;
    position:absolute;
    top: 65%;
    left: -10%;
    @media (max-width: 430px) {
      display: none;
    }
  }
  .pic-4 {
    width: 197px;
    height: 195px;
    position:absolute;
    top: 100%;
    right: 40%;
    @media (max-width: 430px) {
      display: none;
    }
  }
`;
export const StyledClothes = styled.section`
  padding: 35px 0;
  margin: 0 auto;
  max-width: 1440px;
  height: 100%;
  @media (max-width: 430px) {
    padding: 0;
    margin-top: 200px;
    width: 360px;
  }
  .block_container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 430px) {
      flex-direction: column;
    }
  }
  span {
    color: #ff5c00;
  }

  .text_content {
    flex: 1;
    margin-left: 50px;
    margin-right: 100px;
    @media (max-width: 430px) {
      flex: none;
      margin: 5px;
    }
  }
  .text_content img {
    @media (max-width: 430px) {
      width: 30px;
      height: 30px;
    }
  }
  .images {
    width: 50%;
    position: relative;
    @media (max-width: 430px) {
      flex: none;
      margin: 5px;
      height: 0;
    }
  }
  .all {
    border-radius: 6px;
  }
  .pic-1 {
    width: 186px;
    height: 227px;
    position: absolute;
    top: 0;
    left: 0;
    @media (max-width: 430px) {
      width: 146px;
      height: 187px;
      transform: translate(30px, -620px);
    }
  }
  .pic-2 {
    width: 186px;
    height: 227px;
    position: absolute;
    top: -20%;
    left: 27%;
    @media (max-width: 430px) {
      width: 146px;
      height: 187px;
      transform: translate(110px, -580px);
    }
  }
  .pic-3 {
    width: 190px;
    height: 238px;
    position: absolute;
    top: 45%;
    left: 30%;
    @media (max-width: 430px) {
      display: none;
    }
  }
  .pic-4 {
    width: 190px;
    height: 238px;
    position: absolute;
    top: 25%;
    left: 57%;
    @media (max-width: 430px) {
      display: none;
    }
  }
`;
export const StyledShapes = styled.section`
  padding: 46px 46px 126px;
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  @media (max-width: 430px) {
    padding: 0;
    margin-top: 200px;
    width: 360px;
  }
  .block_container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    @media (max-width: 430px) {
      flex-direction: column;
    }
  }

  span {
    color: #ff5c00;
  }

  .text_content {
    flex: 1;
    margin-left: 50px;
    @media (max-width: 430px) {
      flex: none;
      margin: 5px;
    }
  }
  .text_content img {
    @media (max-width: 430px) {
      width: 30px;
      height: 30px;
    }
  }
  .images {
    width: 50%;
    position: relative;
    @media (max-width: 430px) {
      flex: none;
      margin: 5px;
      height: 0;
    }
  }
  .all {
    border-radius: 6px;
  }
  .pic-1 {
    width: 177px;
    height: 266px;
    position: absolute;
    top: 15%;
    left: 0;
    @media (max-width: 430px) {
      width: 137px;
      height: 196px;
      transform: translate(40px, -510px);
    }
  }
  .pic-2 {
    width: 177px;
    height: 266px;
    position: absolute;
    top: -10%;
    left: 25%;
    @media (max-width: 430px) {
      width: 137px;
      height: 196px;
      transform: translate(120px, -480px);
    }
  }
  .pic-3 {
    width: 188px;
    height: 261px;
    position: absolute;
    top: 80%;
    left: 37%;
    @media (max-width: 430px) {
      display: none;
    }
  }

  .pic-4 {
    width: 188px;
    height: 261px;
    position: absolute;
    top: 50%;
    left: 65%;
    @media (max-width: 430px) {
      display: none;
    }
  }
`;
export const StyledHowItWorks = styled.section`
  width: 100%;
  height: 100%;
  background: #fffae9;
  padding: 172px 0;
  @media (max-width: 430px) {
    padding: 20px 0;
  }
  .content {
    max-width: 1440px;
    margin: 0 auto;
  }
  .stages {
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 430px) {
      flex-direction: column;
      align-items: center;
      position: relative;
      text-align: center;
    }
  }

  .stage-1,
  .stage-2 {
    position: relative;
  }
  .picture {
    border-radius: 5px;
    margin-bottom: 58px;
    @media (max-width: 430px) {
      margin-bottom: 28px;
    }
  }
  .stage-1 .under_picture {
    width: 168px;
    height: 217px;
    border: 2px dashed #ff5c00;
    border-radius: 5px;
    margin-bottom: 58px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 9px;
    line-height: 11px;
    text-align: center;
    color: #000000;
    padding-top: 175px;
    @media (max-width: 430px) {
      width: 148px;
      height: 197px;
      margin-bottom: 28px;
      margin-left: 50px;
    }
  }

  .stage-3 img {
    margin-bottom: 50px;
    @media (max-width: 430px) {
      margin-bottom: 28px;
    }
  }
  .first {
    width: 129px;
    height: 171px;
    position: absolute;
    top: -30px;
    left: -20px;
    @media (max-width: 430px) {
      left: 20px;
      top: -20px;
    }
  }
  .stage_number {
      width: 24px;
      height: 24px;
      background: #ff5c00;
      border-radius: 50%;
      color: white;
      text-align: center;
      padding-top: 3px;
      font-size: 15px;
      font-weight: 800;
      margin-bottom: 4px;
      @media (max-width: 430px) {
        position: absolute;
        transform: translate(50px, 5px);
      }
    }
  .stage-4 {
    @media (max-width: 430px) {
      position: relative;
    }
  }
  .stage-4 > .stage_number {
    @media (max-width: 430px) {
      position: absolute;
      top: 66vw;
      left: -6vw;
    }
  }
  .stage-4 > h3{
    @media (max-width: 430px) {
      width: 80%;
      margin-left: 20px;
    }
  }
  h3 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: #000000;
    margin-bottom: 8px;
    @media (max-width: 430px) {
      font-weight: 600;
      font-size: 26px;
      line-height: 34px;
    }
  }

  .button {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    @media (max-width: 430px) {
      margin-top: 10px;
    }
  }
`;

export const StyledMedia = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  padding: 0 46px;
  @media (max-width: 430px) {
    width: 360px;
    padding: 0;
  }
  .block_container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 100%;
    @media (max-width: 430px) {
      flex-direction: column;
    }
  }
  .group {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    @media (max-width: 430px) {
      justify-content: flex-start;
    }
  }
  .pornhub,
  .forbes,
  .verge,
  .buzzfeed {
    background: #fffae9;
    border-radius: 5px;
    padding: 24px 16px 16px;
    @media (max-width: 430px) {
      padding: 5px;
    }
  }
  .pornhub {
    max-width: 700px;
    height: 460px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 50px;
    line-height: 60px;
    color: #333333;
    @media (max-width: 430px) {
      height: 100%;
      max-width: 370px;
      font-weight: 400;
      font-size: 26px;
      line-height: 34px;
      margin: 0 5px 20px;
    }
  }
  .pornhub p {
    margin-top: 120px;
    @media (max-width: 430px) {
      margin-top: 40px;
    }
  }
  .forbes {
    max-width: 270px;
    height: 237px;
    @media (max-width: 430px) {
      max-width: 160px;
      margin-left: 5px;
      margin-right: 10px;
      height: 160px;
    }
  }
  .forbes p,
  .verge p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #333333;
    margin: 55px 32px 0 0;
    @media (max-width: 430px) {
      margin: 15px 12px 0 0;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
  }
  .verge {
    max-width: 270px;
    height: 237px;
    @media (max-width: 430px) {
      max-width: 180px;
      height: 100%;
    }
  }
  .buzzfeed {
    max-width: 570px;
    height: 183px;
    margin-top: 42px;

    @media (max-width: 430px) {
      max-width: 360px;
      height: 100%;
      margin-top: 24px;
      margin-left: 5px;
    }
  }
  .buzzfeed p {
    margin: 35px 32px 0 0;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #333333;
    @media (max-width: 430px) {
      margin: 35px 32px 0 0;
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
    }
  }
  .button {
    display: flex;
    justify-content: center;
    padding: 91px 0;
    @media (max-width: 430px) {
      padding: 31px 0;
    }
  }
`;

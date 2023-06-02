import styled from "styled-components";

export const StyledDeposit = styled.div`
  width: 100%;
  height: 100%;
  background: #fffae9;
  padding-top: 70px;
  padding-bottom: 70px;
  @media(max-width: 430px){
    padding: 30px 30px;
}

  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    width: 50px;
    height: 50px;
  }

  .deposit {
    margin: 0 auto;
    position: relative;
    max-width: 1160px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .deposit__icon-boobs {
    margin-bottom: 9px;
    @media(max-width: 430px){
     margin: 0;
    }
  }

  .deposit__photos-available {
    padding: 23px 57px 16px;
    border: 3px solid #ff5c00;
    border-radius: 25px;
    position: absolute;
    top: 22px;
    right: 0;
    @media(max-width: 430px){
      top: 102px;
      right: 23%;
      padding: 13px 27px 6px;
    }
  }

  .deposit__photos-available > p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    color: #333333;
    @media(max-width: 430px){
      font-size: 15px;
      line-height: 20px;
    }
  }

  .deposit__photos-available-title {
    position: absolute;
    top: -13px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    background: #fffae9;
    z-index: 5;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    color: #333333;
    @media(max-width: 430px){
      font-size: 18px;
      line-height: 26px;
    }
  }

  .deposit__photos-available-gallery {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 7px;
  }

  .deposit__photos-available-gallery span {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 56px;
    line-height: 68px;
    color: #ff5c00;
    margin-left: 10px;
    @media(max-width: 430px){
      font-weight: 600;
      font-size: 26px;
      line-height: 32px;
    }
  }

  .deposit__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 883px;
  }

  .deposit__subtitle,
  .deposit__form-title-payment {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    color: #333333;
    margin-bottom: 50px;
    @media(max-width: 430px){
      font-size: 20px;
      line-height: 26px;
      margin: 20px 0;
    }
  }

  .deposit__icon-photo {
    width: 53px;
    height: 53px;
    border-radius: 50%;
    background: #ff5c00;
    position: relative;
    @media(max-width: 430px){
      width: 35px;
      height: 35px;
    }
  }

  .deposit__icon-photo img {
    position: absolute;
    width: 53px;
    height: 53px;
    @media(max-width: 430px){
      width: 35px;
      height: 35px;
      
    }
  }

  .deposit__unordered_list_type_coins,
  .deposit__unordered_list_type_payment {
    max-width: 900px;
    display: grid;
    grid-template-columns: repeat(3, 261px);
    grid-auto-rows: 140px;
    gap: 50px;
    margin-bottom: 80px;
    @media(max-width: 430px){
      max-width: 430px;
      grid-template-columns: repeat(2, 160px);
      grid-auto-rows: 80px;
      gap: 20px;
      margin-bottom: 30px;
    }
  }

  .deposit__unordered_list_type_payment {
    grid-template-columns: repeat(2, 416.5px);
    grid-auto-rows: 180px;
    margin-bottom: 80px;
    @media(max-width: 430px){
      grid-template-columns: repeat(2, 160px);
      grid-auto-rows: 80px;
      margin-bottom: 40px;
    }
  }

  .deposit__unordered_list_type_payment > .radio-button {
    padding: 30px 0 35px 40px;
    justify-content: flex-start;
    @media(max-width: 430px){
      padding: 10px 0 15px 20px;
    }
  }

  .deposit__unordered_list_type_payment .radio-button__label {
    align-items: center;
    position: relative;
    margin-right: 50px;
    @media(max-width: 430px){
      margin-right: 20px;
    }
  }

  .coins h3 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    color: #000000;
    @media(max-width: 430px){
      font-weight: 500;
      font-size: 22px;
      line-height: 27px;
    }
  }

  .coins p {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #ff5c00;
    @media(max-width: 430px){
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }
  }
  .coins img {
    position: absolute;
    bottom: -1px;
    right: -1px;
    border-radius: 0 0 50% 0;
    @media(max-width: 430px){
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;
      width: 23px;
      height: 23px;
    }
  }

  .payment_method > img {
    width: 100px;
    height: 50px;
    margin-bottom: 12px;
    object-fit: contain;
    @media(max-width: 430px){
      width: 50px;
      height: 30px;
      margin-bottom: 0;
      object-fit: contain;
    }
  }

  .payment_method > p {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    line-height: 43px;
    color: #000000;
    @media(max-width: 430px){
      font-weight: 500;
      font-size: 20px;
      line-height: 27px;
    }
  }

  .radio-button {
    border: 2px solid #ff5c00;
    border-radius: 25px;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    transition: all 0.2s linear;
  }

  .radio-button > label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    width: 34px;
    height: 34px;
    outline: 3px solid #ff5c00;
    background-color: transparent;
    outline-offset: 6px;
    margin-left: 9px;
    border-radius: 50%;
    @media(max-width: 430px){
      margin-left: 0px;
      width: 25px;
      height: 25px;
    }
  }

  .radio-button > label.active {
    outline-color: white;
    background-color: white;
  }

  .radio-button:hover {
    background: rgba(255, 92, 0, 0.2);
    cursor: pointer;
    transform: scale(1.1);
  }

  .radio-button.active {
    background-color: #ff5c00;
    transform: none;
  }

  .radio-button.active:hover {
    cursor: not-allowed;
  }

  .radio-button.active p,
  .radio-button.active h3 {
    color: white;
  }
`;

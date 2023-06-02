import styled from "styled-components";

export const StyledPopups = styled.div`
  .modal {
    height: 100vh;
    width: 100vw;
    background-color: rgba(256, 256, 256, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(0);
    z-index: 100;
  }
  .modal__content {
    padding: 30px;
    width: 382px;
    background: #fffae9;
    border: 2px solid #ff5c00;
    border-radius: 50px;
    @media(max-width: 430px){
      width: 80%;
      padding: 20px;
    }
  }
  .slider {
    background-color: rgba(256, 256, 256, 0.2);
  }
  .slider__content {
    width: 1000px;
    height: 900px;
  }
  .modal.active {
    transform: scale(1);
  }
  .continue,
  .prepare {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #333333;
  }
  .invisible {
    display: none;
  }
`;
export const StyledLogin = styled.div`
  position: relative;
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .go_back_btn {
    width: 48px;
    height: 48px;
    background: rgba(255, 92, 0, 0.5);
    border-radius: 66px;
    position: relative;
  }
  .go_back_btn:hover{
    background-color: #ff5c00;
  }
  .registration {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #000000;
    border: 1px solid #ff5c00;
    border-radius: 50px;
    padding: 15px 27px;
  }
  .registration:hover {
    cursor: pointer;
    background: #ff5c00;
    color: white;
    font-weight: 600;
  }
  .logo {
    width: 144px;
    height: 42px;
    margin: 16px 0;
  }
  p.subheader {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    margin-bottom: 15px;
  }
  .invalid_password,
  .user_not_found,
  .user_exists {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #ea3223;
    margin-bottom: 10px;
    text-align: center;
  }
  .attention {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    align-items: center;
    color: #ffb400;
    padding-left: 35px;
    margin-bottom: 10px;
    @media(max-width: 430px){
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
    }
  }
  .caution {
    position: absolute;
    bottom: 75px;
  }
`;

export const StyledMoney = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 268px;
  img {
    width: 80px;
    height: 77px;
  }
`;

export const StyledSlider = styled.div`
  .gallery {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    min-height: 100vh;
    min-width: 100vw;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(34, 34, 34, 0.7);
    padding: 2em 1em;
  }

  .gallery__content {
    padding: 40px;
    background: #fffae9;
    border: 2px solid #ff5c00;
    border-radius: 50px;
    width: 95%;
    max-width: 800px;
    aspect-ratio: 3/2;
    @media(max-width: 430px){
      padding: 5px;
      height: 80%;
    }
  }

  .gallery__slider {
    width: 100%;
    height: 800px;
    position: relative;
   
    @media(max-width: 430px){
      height: 100%;
      width: 90%;
    }
  }
  .gallery img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    user-select: none;
    pointer-events: none;
  }
  .buttons_navigation {
    background: #ff5c00;
    border: 2px solid #ff5c00;
    border-radius: 25px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 35px;
    line-height: 43px;
    color: #ffffff;
    height: 80px;
    padding: 12px 26px;
    width: 80px;
    margin: 50px;
    z-index: 100;
    @media(max-width: 430px){
     display: none;
    }
  }
  .buttons_navigation:hover {
    cursor: pointer;
    background-color: white;
    color: black;
  }
  .buttons_navigation:disabled {
    border: 3px solid #ff6e1d;
    cursor: not-allowed;
    color: rgba(255, 92, 0, 1);
    background-color: rgba(255, 92, 0, 0.1);
  }
  ._prev {
    position: absolute;
    top: 42%;
    left: 20%;
  }
  ._next {
    position: absolute;
    top: 42%;
    right: 20%;
  }
`;

import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  padding-top: 90px;
  background-color: #fffae9;
  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #fffae9;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    z-index: 100;
    @media (max-width: 430px) {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
    }
  }
  .header__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    padding: 16px 5px;
    @media (max-width: 430px) {
      padding: 20px 0 26px;
      width: 375px;
    }
  }

  .header_nav_block {
    height: 100%;
    width: 100%;
    display: flex;
    margin-right: auto;
  }
  .nav ul {
    height: 100%;
    width: 375px;
    display: flex;
    align-items: center;
    list-style-type: none;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    justify-content: space-evenly;
    position: relative;
  }
  .nav a:hover {
    color: #ff5c00;
    cursor: pointer;
  }

  .header_nav_block {
    @media (max-width: 430px) {
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      transform: translateX(-100%);
      z-index: 10;
      transition: all 0.3s;
    }
  }
  .header_nav_block.active {
    @media (max-width: 430px) {
      transform: translateX(0);
    }
  }
  .nav {
    @media (max-width: 430px) {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      transition: 0.3s;
      display: flex;
      align-items: center;
    }
  }
  .nav ul {
    @media (max-width: 430px) {
      display: flex;
    }
  }
  .nav ul li a {
    @media (max-width: 430px) {
      color: white;
      list-style: none;
    }
  }
  .nav ul li {
    @media (max-width: 430px) {
      list-style: none;
    }
  }
  @keyframes header_f {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }

    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  @keyframes header_unf {
    0% {
      opacity: 1;
      transform: translateY(0%);
      position: fixed;
    }
    60% {
      opacity: 0;
      transform: translateY(-100%);
      position: fixed;
    }
    70% {
      opacity: 0;
      transform: translateY(0%);
    }
    100% {
      opacity: 1;
    }
  }

  .header[data-fix="true"] {
    position: fixed;
    animation-duration: 0.5s;
    animation-name: header_f;
    box-shadow: 0 4px 11px rgba(0, 0, 0, 0.18);
  }

  .header[data-fix="false"] {
    animation: header_unf 0.8s forwards;
  }

  img {
    transform: translateY(-16px);
    margin-right: 42px;
    cursor: pointer;
    @media (max-width: 430px) {
      width: 25%;
      height: 25%;
      margin-right: 5px;
      transform: translateY(-3px);
    }
  }
  .header_login-btn {
    display: flex;
    align-items: center;
    height: 40px;
    border: 2px solid #ff5c00;
    border-radius: 25px;
    position: relative;
    margin-right: 20px;
    @media (max-width: 430px) {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      height: 30px;
      margin-right: 0;
      padding-right: 5px;
    }
  }
  .header_login {
    min-width: 79px;
    height: 40px;
    background-color: #ff5c00;
    border-radius: 25px;
    text-align: right;
    padding: 9px 15px 9px 9px;
    color: white;
    transform: translateX(-1px);
    @media (max-width: 430px) {
      min-width: 61px;
      height: 30px;
      padding: 5px 15px 7px 7px;
    }
  }
  .header_login:hover {
    background: #ff9942;
    cursor: pointer;
  }
  .header_register {
    padding: 0 25px 0 6px;
    position: relative;
    white-space: nowrap;
    @media (max-width: 430px) {
      padding: 5px;
    }
  }
  .header_register:hover {
    color: #ff5c00;
    cursor: pointer;
  }
  .header_register img {
    position: absolute;
    top: 24px;
    right: -35px;
    @media (max-width: 430px) {
      top: 14px;
      right: 0;
    }
  }
  .dropdown {
    position: absolute;
    width: 212px;
    height: 132px;
    background: #fffae9;
    border: 2px solid #ff5c00;
    border-radius: 25px;
    top: 45px;
    left: -40px;
    z-index: 100;
  }
  .dropdown li {
    list-style-type: none;
    padding: 10px 0 10px 14px;
    border-bottom: 2px solid #ff5c00;
  }
  .dropdown li:last-child {
    border-bottom: none;
  }
  .dropdown a:hover,
  .dropdown li:last-child:hover {
    color: #ff5c00;
    cursor: pointer;
  }

  .header_create_btn.active {
    @media (max-width: 430px) {
      display: flex;
    }
  }

  .header_create-btn {
    border: 2px solid #ff5c00;
    height: 40px;
    border-radius: 52px;
    padding: 8px 20px;
    margin-left: 30px;
    @media (max-width: 430px) {
      transform: translate(-320px, 150px);
      z-index: 1000;
      background-color: #ff5c00;
      color: white;
      text-align: center;
      white-space: nowrap;
    }
  }
  .header_create-btn:hover {
    cursor: pointer;
    background: #ff5c00;
  }
  a:hover {
    color: white;
  }
  .circle {
    width: 32px;
    height: 32px;
    background-color: white;
    border-radius: 50%;
    transform: translate(-5px, -27px);
    @media (max-width: 430px) {
      transform: translate(-6px, -24px);
      width: 27px;
      height: 27px;
    }
  }
  .circle img {
    width: 32px;
    height: 32px;
    position: absolute;
    top: 16px;
    left: 0;
    @media (max-width: 430px) {
      top: 1px;
      left: -2px;
    }
  }
  .burger-btn {
    @media (max-width: 430px) {
      width: 30px;
      height: 24px;
      position: relative;
      margin-right: 15px;
      cursor: pointer;
      z-index: 100;
    }
  }

  .burger-btn span {
    @media (max-width: 430px) {
      position: absolute;
      top: 10px;
      width: 30px;
      height: 4px;
      background-color: #ff5c00;
      border-radius: 5px;
    }
  }
  .burger-btn.active span {
    @media (max-width: 430px) {
      display: none;
    }
  }
  .burger-btn:before {
    @media (max-width: 430px) {
      content: "";
      position: absolute;
      top: 0;
      width: 30px;
      height: 4px;
      background-color: #ff5c00;
      border-radius: 5px;
      transition: 0.3s all ease;
    }
  }
  .burger-btn.active:before {
    @media (max-width: 430px) {
      transform: translateY(10px) rotate(-45deg);
    }
  }
  .burger-btn:after {
    @media (max-width: 430px) {
      content: "";
      position: absolute;
      bottom: 0;
      width: 30px;
      height: 4px;
      background-color: #ff5c00;
      border-radius: 5px;
      transition: 0.4s all ease;
    }
  }
  .burger-btn:after {
    @media (max-width: 430px) {
      content: "";
      position: absolute;
      bottom: 0;
      width: 30px;
      height: 4px;
      background-color: #ff5c00;
      border-radius: 5px;
    }
  }
  .burger-btn.active:after {
    @media (max-width: 430px) {
      transform: translateY(-10px) rotate(45deg);
    }
  }
`;

export const StyledMenu = styled.ul`
  height: 100%;
  width: ${({ menuWidth }) => menuWidth};
  display: flex;
  align-items: center;
  list-style-type: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  justify-content: space-evenly;
  position: relative;
  @media (max-width: 430px) {
    display: none;
  }

  a:hover {
    color: #ff5c00;
    cursor: pointer;
  }
`;

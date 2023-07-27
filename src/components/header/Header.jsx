import React, {useEffect, useState} from "react";
import { StyledHeader } from "../../styles/StyledHeader";
import logo from "../../assets/icons/logo.svg";
import {NavLink, useMatch} from "react-router-dom";
import Login from "../popups/Login";
import Registration from "../popups/Registration";
import Notification from "../popups/Notification";
import UserMenu from "./UserMenu";
import OnOutsideClick from "react-outclick";
import LoginButton from "./LoginButton";
import { useDispatch, useSelector } from "react-redux";
import {showPopup, userBalance} from "../../thunkApi/userSlice";
import { useNavigate } from "react-router-dom";
import CustomLink from "./CustomLink";
import {useTranslation} from "react-i18next";


const Header = () => {
  const dispatch = useDispatch();
  const [activeWait, setActiveWait] = useState(false);
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const navigate = useNavigate();
  const [burgerActive, setBurgerActive] = useState(false);
  const [menuMobileActive, setMenuMobileActive] = useState(false);
  const [headerFix, setHeaderFix] = useState(false);
  const match = useMatch('/landing');
  const { t } = useTranslation('landing')
  const lng = t("header", {returnObjects: true})

  const handleMobileMenu = () => {
    setBurgerActive(!burgerActive);
    setMenuMobileActive(!menuMobileActive);
  };
  const handlePopup = (isShow, type) => {
    dispatch(
      showPopup({
        isShow,
        type: type ? type : "",
      })
    );
  };
  const showHeader = () => {
    if (window.pageYOffset > 450) {
      setHeaderFix(true);
    } else {
      setHeaderFix(false);
    }
  }

  const handleLogoRefreshPage = () => {
    navigate('/landing')
    if(match) {
      window.location.reload();
    }
  }
  useEffect(()=>{
    document.addEventListener('scroll', showHeader);
  }, [])

  return (
    <>
      <StyledHeader>
        <header data-fix={headerFix} className="header"
        >
          <div className="header__content">
            <img src={logo} alt="logo" onClick={handleLogoRefreshPage}/>
            <div
              className={
                menuMobileActive
                  ? "header_nav_block active"
                  : "header_nav_block"
              }
            >
              <nav className="nav">
                <ul>
                  <li>
                    <CustomLink to="landing">{lng["how it works"]}</CustomLink>
                  </li>
                  <li>
                    <CustomLink to="about">{lng["about"]}</CustomLink>
                  </li>
                </ul>
              </nav>
              <NavLink
                className={
                  menuMobileActive
                    ? "header_create-btn active"
                    : "header_create-btn"
                }
                to="create-nude"
                onClick={
                  isLoggedIn
                    ? () => {
                        navigate("create-nude");
                      }
                    : () => {
                        handlePopup(true, "login");
                      }
                }
              >
                {lng["create nude"]}
              </NavLink>
            </div>
            {isLoggedIn ? (
              <OnOutsideClick
                onOutsideClick={() => {
                  setIsDropdownShown(false);
                }}
              >
                <UserMenu
                  isDropdownShown={isDropdownShown}
                  setIsDropdownShown={setIsDropdownShown}
                />
              </OnOutsideClick>
            ) : (
              <LoginButton handlePopup={handlePopup} />
            )}
            <div
              className={burgerActive ? "burger-btn active" : "burger-btn"}
              onClick={handleMobileMenu}
            >
              <span></span>
            </div>
          </div>
        </header>
      </StyledHeader>
      <Login handlePopup={handlePopup} />
      <Registration handlePopup={handlePopup} />
      <Notification activeWait={activeWait} setActiveWait={setActiveWait} />
    </>
  );
};

export default Header;

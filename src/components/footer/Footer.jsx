import React from "react";
import Menu from "../header/Menu";
import { StyledFooter } from "../../styles/StyledFooter";
import { NavLink, useNavigate } from "react-router-dom";
import { showPopup } from "../../thunkApi/userSlice";
import { useDispatch, useSelector } from "react-redux";
import {useTranslation} from "react-i18next";

const Footer = () => {
  const token = useSelector((state) => state.user.user?.authToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation('landing')
  const lng = t("header", {returnObjects: true})

  const handlePopup = (isShow, type) => {
    dispatch(
      showPopup({
        isShow,
        type: type ? type : "",
      })
    );
  };
  return (
    <StyledFooter>
      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__info">
            <p> &#169;2021</p>
            <p>AiNude Inc.</p>
          </div>
          <Menu menuWidth={"100%"} />
          <NavLink
            className="footer_create-btn"
            to="create-nude"
            onClick={
              token
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
      </footer>
    </StyledFooter>
  );
};

export default Footer;

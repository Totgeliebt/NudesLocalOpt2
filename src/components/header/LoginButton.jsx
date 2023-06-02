import React from "react";
import {useTranslation} from "react-i18next";

const LoginButton = ({ handlePopup }) => {
  const { t } = useTranslation('landing')
  const lng = t("header", {returnObjects: true})
  return (
    <div className="header_login-btn">
      <div
        onClick={() => {
          handlePopup(true, "login");
        }}
        className="header_login"
      >
        {lng["login"]}
      </div>
      <div onClick={() => handlePopup(true, "reg")} className="header_register">
        {lng["registration"]}
      </div>
    </div>
  );
};

export default LoginButton;

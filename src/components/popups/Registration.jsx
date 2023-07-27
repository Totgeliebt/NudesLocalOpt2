import React, { useState } from "react";
import { StyledLogin, StyledPopups } from "../../styles/StyledPopups";
import back from "../../assets/icons/back-icon.svg";
import logo from "../../assets/icons/logo.svg";
import MyInput from "../MyInput";
import MyButton from "../MyButton";
import caution from "../../assets/icons/caution-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import {registration, userBalance} from "../../thunkApi/userSlice";
import { StyledRegex } from "../../styles/StyledP";
import {useTranslation} from "react-i18next";
import {registrationUser, saveUser} from "../../thunkApi/authSlice";

const Registration = ({ handlePopup }) => {
  const popup = useSelector((state) => state.user.popup);
  const error = useSelector((state) => state?.auth?.error);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const queryParams = new URLSearchParams(window.location.search);
  const clickid = queryParams.get("clickid");
  const { t } = useTranslation('landing')
  const lng = t("popup", {returnObjects: true})
  const dispatch = useDispatch();

  const userData = { userName: user, password: password, clickId: "1241dsg-3523-dsgsdg" };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    dispatch(registrationUser({userData}))
    // dispatch(userBalance({user, password}))
    if(error === "200") {
      handlePopup(false, "reg")
      handlePopup(true, "login")
    }
  };
  return (
    <StyledPopups>
      <div
        className={
          popup.isShow && popup.type === "reg" ? "modal active" : "modal"
        }
        onClick={() => handlePopup(false)}
      >
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <StyledLogin>
            <div className="wrapper">
              <img
                className="go_back_btn"
                src={back}
                alt="go back"
                onClick={() => handlePopup(false)}
              />
              <div
                className="registration"
                onClick={() => handlePopup(true, "login")}
              >
                {lng["log in"]}
              </div>
            </div>
            <img className="logo" src={logo} alt="logo" />
            <p className="subheader">{lng["register text"]}</p>
            <form onSubmit={handleRegisterSubmit}>
              <MyInput
                pattern={"^[a-zA-Z0-9]+$"}
                minLength={"4"}
                maxLength={"10"}
                value={user}
                onChange={(e) => setUser(e.target.value)}
                type={"text"}
                placeholder={lng["login placeholder"]}
              />
              <StyledRegex>
                {lng["login restrictions"]}
                <span
                  className={
                    user.length !== 0
                      ? user.length > 3
                        ? "green"
                        : "red"
                      : null
                  }
                >
                  {user.length}/10
                </span>
              </StyledRegex>
              <MyInput
                pattern={
                  // "^[a-zA-Z0-9!@#$%^&*)(+=._-]{8,8}$"
                  "^[a-zA-Z0-9!@#$%^&*)(+=._-]{}$"
                }
                // minLength={"8"}
                // maxLength={"8"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={"password"}
                placeholder={lng["pswd placeholder"]}
              />
              <StyledRegex>
                {lng["pswd restrictions"]}
              </StyledRegex>
              <img
                className={
                  error === '400'||error === '409' ? "caution invisible" : "caution"
                }
                src={caution}
                alt="caution"
              />
              <p
                className={
                  error === '400'||error === '409' ? "attention invisible" : "attention"
                }
              >
                {lng["attention"]}
              </p>
              <p
                className={
                  error === '400'||error === '409'
                    ? "user_exists"
                    : "user_exists invisible"
                }
              >
                {lng["user exists"]} <br/> {lng["try another user"]}
              </p>
              <MyButton text="Registration" type="popup" />
            </form>
          </StyledLogin>
        </div>
      </div>
    </StyledPopups>
  );
};

export default Registration;

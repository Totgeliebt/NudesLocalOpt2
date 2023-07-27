import React, { useState } from "react";
import MyButton from "../MyButton";
import { StyledLogin, StyledPopups } from "../../styles/StyledPopups";
import back from "../../assets/icons/back-icon.svg";
import logo from "../../assets/icons/logo.svg";
import MyInput from "../MyInput";
import { useDispatch, useSelector } from "react-redux";
import { userBalance} from "../../thunkApi/userSlice";
import { useTranslation } from "react-i18next";
import { basicAuth, saveUser } from "../../thunkApi/authSlice";

const Login = ({ handlePopup }) => {
  const popup = useSelector((state) => state.user.popup);
  const authStatus = useSelector((state) => state?.auth?.status);
  const error = useSelector((state) => state?.auth?.error);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation("landing");
  const lng = t("popup", { returnObjects: true });
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(basicAuth({ user, password }))
    dispatch(userBalance({user, password }))
    if(authStatus === "fulfilled") {
      handlePopup(false)
    }
  };

  return (
    <StyledPopups>
      <div
        className={
          popup.isShow && popup.type === "login" ? "modal active" : "modal"
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
              ></img>
              <div
                className="registration"
                onClick={() => handlePopup(true, "reg")}
              >
                {lng["registration"]}
              </div>
            </div>
            <img className="logo" src={logo} alt="logo" />
            <p className="subheader"> {lng["login text"]}</p>
            <form onSubmit={handleSubmit}>
              <MyInput
                value={user}
                onChange={(e) => setUser(e.target.value)}
                type={"text"}
                placeholder={lng["login placeholder"]}
              />
              <MyInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={"password"}
                placeholder={lng["pswd placeholder"]}
              />
              <p
                className={
                  error === "400"
                    ? "user_not_found"
                    : "user_not_found invisible"
                }
              >
                {lng["invalid login"]}
              </p>
              <MyButton text={lng["log in"]} type="popup" />
            </form>
          </StyledLogin>
        </div>
      </div>
    </StyledPopups>
  );
};

export default Login;

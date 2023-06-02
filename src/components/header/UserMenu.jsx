import React from "react";
import arrowDown from "../../assets/icons/arrow-down-icon.svg";
import pic from "../../assets/icons/gallery-dark.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../thunkApi/userSlice";
import DropdownLink from "./DropdownLink";
import {useTranslation} from "react-i18next";

const UserMenu = ({ isDropdownShown, setIsDropdownShown }) => {
  const userName = useSelector((state) => state.user.user.userName);
  const wallet = useSelector((state) => state.user.user.wallet);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const { t } = useTranslation('landing')
  const lng = t("header", {returnObjects: true})
  return (
    <div
      className="header_login-btn"
      onClick={() => setIsDropdownShown(!isDropdownShown)}
    >
      <div className="header_login">
        {wallet}
        <div className="circle">
          <img src={pic} alt="gallery" />
        </div>
      </div>
      <div className="header_register">
        {userName}
        <img src={arrowDown} alt="open user menu" />
      </div>
      {isDropdownShown ? (
        <ul className="dropdown">
          <li>
            <DropdownLink to="deposit">{lng["balance"]}</DropdownLink>
          </li>
          <li>
            <DropdownLink to="photos">{lng["photos"]}</DropdownLink>
          </li>
          <li onClick={handleLogout}>{lng["log out"]}</li>
        </ul>
      ) : null}
    </div>
  );
};

export default UserMenu;

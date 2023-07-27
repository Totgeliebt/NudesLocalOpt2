import React, {useEffect} from "react";
import arrowDown from "../../assets/icons/arrow-down-icon.svg";
import pic from "../../assets/icons/gallery-dark.svg";
import { useDispatch, useSelector } from "react-redux";
import DropdownLink from "./DropdownLink";
import {useTranslation} from "react-i18next";
import {logoutUser} from "../../thunkApi/authSlice";
import {userBalance} from "../../thunkApi/userSlice";

const UserMenu = ({ isDropdownShown, setIsDropdownShown }) => {
  const user = useSelector((state) => state?.auth?.user.user);
  // const user = useSelector((state) => state?.user?.user.userName);
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const balance = useSelector((state) => state?.user?.user.balance);
  const password = useSelector((state) => state?.auth?.user.password);
console.log('userName',user)
console.log('isLoggedIn',isLoggedIn)
console.log('balance',balance)
console.log('password',password)
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const { t } = useTranslation('landing')
  const lng = t("header", {returnObjects: true})
  useEffect(() => {
    // console.log('balance in user menu')
    dispatch(userBalance({user, password}))
  },[])
  return (
    <div
      className="header_login-btn"
      onClick={() => setIsDropdownShown(!isDropdownShown)}
    >
      <div className="header_login">
        {balance}
        <div className="circle">
          <img src={pic} alt="gallery" />
        </div>
      </div>
      <div className="header_register">
        {user}
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

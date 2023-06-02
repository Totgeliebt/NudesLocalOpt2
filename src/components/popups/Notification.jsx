import React from "react";
import { StyledMoney, StyledPopups } from "../../styles/StyledPopups";
import MyButton from "../MyButton";
import clock from "../../assets/icons/clock-icon.svg";
import { useSelector } from "react-redux";

const Notification = ({ handlePopup, text, popupType }) => {
  const popup = useSelector((state) => state.user.popup);

  return (
    <StyledPopups>
      <div
        className={
          popup.isShow && popup.type === popupType ? "modal active" : "modal"
        }
        onClick={() => handlePopup(false)}
      >
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <StyledMoney>
            <img src={clock} alt="wait" />
            <p className="continue">{text}</p>
            <MyButton
              type={"popup"}
              text={"Okay"}
              onClick={() => handlePopup(false)}
            />
          </StyledMoney>
        </div>
      </div>
    </StyledPopups>
  );
};

export default Notification;

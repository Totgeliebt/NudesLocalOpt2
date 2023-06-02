import React from "react";
import {
  StyledMyButton,
  StyledPayButton,
  StyledPopupButton,
} from "../styles/StyledMyButton";

const MyButton = ({
  onClick,
  text,
  type = "default",
  btnWidth,
  disabled,
}) => {
  if (type === "pay") {
    return (
      <StyledPayButton onClick={onClick} disabled={disabled}>
        {text}
      </StyledPayButton>
    );
  }

  if (type === "popup") {
    return (
      <StyledPopupButton onClick={onClick} disabled={disabled}>
        {text}
      </StyledPopupButton>
    );
  }
  if (type === "default") {
    return (
      <StyledMyButton onClick={onClick} disabled={disabled} >
        {text}
      </StyledMyButton>
    );
  }
};

export default MyButton;

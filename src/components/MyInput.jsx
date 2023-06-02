import React from "react";
import { StyledMyInput } from "../styles/StyledInput";

const MyInput = ({ type, placeholder, value, onChange, minLength, maxLength, pattern }) => {
  return (
    <StyledMyInput>
      <input
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        type={type}
        placeholder={placeholder}
        required
        defaultValue={value}
        onChange={onChange}
      />
    </StyledMyInput>
  );
};

export default MyInput;

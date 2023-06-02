import React from "react";

const RadioButton = ({ value, data, onClick, ContentComponent }) => {
  const { id, name } = data;

  const handleClick = () => {
    onClick(id);
  };

  return (
    <li
      className={value === id ? "radio-button active" : "radio-button"}
      onClick={handleClick}
    >
      <input
        defaultChecked={value === id}
        type="radio"
        name={name}
        value={id}
      />
      <label
        htmlFor={id}
        className={
          value === id ? "radio-button__label active" : "radio-button__label"
        }
      ></label>
      <ContentComponent data={data} />
    </li>
  );
};

export default RadioButton;

import React from "react";
import { StyledErrorPhoto } from "../../styles/StyledMyPhotos";
import error from "../../assets/icons/warning-icon.svg";
import {useTranslation} from "react-i18next";

const ErrorPhoto = () => {
  const { t } = useTranslation()
  const lng = t("my photos", {returnObjects: true})
  return (
    <StyledErrorPhoto>
      <img id="container" src={error} alt="error" />
      <p>{lng["error"]}</p>
    </StyledErrorPhoto>
  );
};

export default ErrorPhoto;

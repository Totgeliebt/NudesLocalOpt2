import React from "react";
import { StyledProcessingPhoto } from "../../styles/StyledMyPhotos";
import Lottie from "react-lottie";
import animationData from "../../lottie/ProgressBar.json";
import {useTranslation} from "react-i18next";

const ProcessingPhoto = () => {
  const { t } = useTranslation()
  const lng = t("my photos", {returnObjects: true})
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <StyledProcessingPhoto>
      <div className="lottie_wrapper">
      <Lottie
        options={defaultOptions}
        height={'100%'}
        width={'100%'}
      />
      </div>
      <p>{lng["processing"]}</p>
    </StyledProcessingPhoto>
  );
};

export default ProcessingPhoto;

import React from "react";
import { StyledLoader } from "../styles/StyledLoader";
import Lottie from "react-lottie";
import animationData from "../lottie/ProgressBar.json";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <StyledLoader>
      <div className="content">
        <div className="lottie">
        <Lottie
          options={defaultOptions}
          height={'100%'}
          width={'100%'}
        />
        </div>
      </div>
    </StyledLoader>
  );
};

export default Loader;

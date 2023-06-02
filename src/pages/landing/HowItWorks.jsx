import React from "react";
import { StyledHowItWorks } from "../../styles/StyledLanding";
import MyButton from "../../components/MyButton";
import { useNavigate } from "react-router-dom";
import upload from "../../assets/images/upload.png";
import adjust from "../../assets/images/adjust.png";
import result from "../../assets/images/result.png";
import processing from "../../assets/images/submit.png";
import { useDispatch, useSelector } from "react-redux";
import { showPopup } from "../../thunkApi/userSlice";
import {StyledH1} from "../../styles/StyledH1";
import {StyledPHow} from "../../styles/StyledP";
import {useTranslation} from "react-i18next";

const HowItWorks = () => {
  const token = useSelector((state) => state.user.user?.authToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlePopup = (isShow, type) => {
    dispatch(
      showPopup({
        isShow,
        type: type ? type : "",
      })
    );
  };
  const { t } = useTranslation('landing')
  const lng = t("how it works", {returnObjects: true})
  return (
    <StyledHowItWorks>
      <div className="content">
        <StyledH1>{lng["section heading"]}</StyledH1>
        <div className="stages">
          <div className="stage-1">
            <img src={upload} alt="upload" className="picture first" />
            <div className="under_picture">{lng["upload here"]}</div>
            <div className="stage_number">1</div>
            <h3>{lng["upload title"]}</h3>
            <StyledPHow>{lng["upload text"]}</StyledPHow>
          </div>
          <div className="stage-2">
            <img className="picture" src={adjust} alt="adjust" />
            <div className="stage_number">2</div>
            <h3>{lng["adjust title"]}</h3>
            <StyledPHow>{lng["adjust text"]}</StyledPHow>
          </div>
          <div className="stage-3">
            <img src={processing} alt="processing" />
            <div className="stage_number">3</div>
            <h3>{lng["submit title"]}</h3>
            <StyledPHow>
              {lng["submit text"]}
            </StyledPHow>
          </div>
          <div className="stage-4">
            <img src={result} alt="" />
            <div className="picture"></div>
            <div className="stage_number">4</div>
            <h3>{lng["result title"]}</h3>
            <StyledPHow>{lng["result text"]}</StyledPHow>
          </div>
        </div>
        <div className="button">
          <MyButton
            text={lng["try"]}
            onClick={
              token
                ? () => {
                    navigate("/create-nude");
                  }
                : () => {
                    handlePopup(true, "login");
                  }
            }
          />
        </div>
      </div>
    </StyledHowItWorks>
  );
};

export default HowItWorks;

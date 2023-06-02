import React from "react";
import { StyledGeneral } from "../../styles/StyledLanding";
import boobsIcon from "../../assets/icons/boobs-icon.svg";
import MyButton from "../../components/MyButton";
import { useNavigate } from "react-router-dom";
import before from "../../assets/images/gen-info-before.png";
import after from "../../assets/images/gen-info-after.png";
import { useDispatch, useSelector } from "react-redux";
import { showPopup } from "../../thunkApi/userSlice";
import {StyledH1Landing} from "../../styles/StyledH1";
import {useTranslation} from "react-i18next";

const GeneralInfo = () => {
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
  const lng = t("general", {returnObjects: true})
  return (
    <StyledGeneral>
      <div className="content">
        <div className="block_container">
          <div className="block_subheader">
            <img src={boobsIcon} alt="boobs" />
            <StyledH1Landing>{lng["main heading"]}</StyledH1Landing>
            <p className="ai-descr">
              {lng["description"]}
            </p>
            <MyButton
              text={lng["create nude btn"]}
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
          <img className="photos" src={before} alt="before" />
          <img className="photos" src={after} alt="after" />
        </div>
        <p className="number">8,639,714</p>
        <p className="since_covid">
          {lng["how many nudes"]}
        </p>
      </div>
    </StyledGeneral>
  );
};

export default GeneralInfo;

import React from "react";
import { StyledMedia } from "../../styles/StyledLanding";
import MyButton from "../../components/MyButton";
import forbes from "../../assets/icons/forbes-icon.svg";
import pornhub from "../../assets/icons/pornhub-icon.svg";
import buzzfeed from "../../assets/icons/buzzfeed.svg";
import verge from "../../assets/icons/verge-icon.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showPopup } from "../../thunkApi/userSlice";
import { StyledH1Media} from "../../styles/StyledH1";

import {useTranslation} from "react-i18next";

const Media = () => {
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
  const lng = t("media", {returnObjects: true})
  return (
    <StyledMedia>
      <StyledH1Media>{lng["section heading"]}</StyledH1Media>
      <div className="block_container">
        <div className="pornhub">
          <img src={pornhub} alt="" />
          <p>
            {lng["porn hub"]}
          </p>
        </div>
        <div className="group">
          <div className="forbes">
            <img src={forbes} alt="forbes" />
            <p>{lng["forbes"]}</p>
          </div>
          <div className="verge">
            <img src={verge} alt="verge" />
            <p>
              {lng["verge"]}
            </p>
          </div>
          <div className="buzzfeed">
            <img src={buzzfeed} alt="buzzfeed" />
            <p>
              {lng["buzzfeed"]}
            </p>
          </div>
        </div>
      </div>
      <div className="button">
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
    </StyledMedia>
  );
};

export default Media;

import React from "react";
import { StyledMyPhotos } from "../../styles/StyledMyPhotos";
import boobs from "../../assets/icons/boobs-icon.svg";
import MyButton from "../../components/MyButton";
import PhotoGroup from "./PhotoGroup";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import {StyledH1Photos} from "../../styles/StyledH1";
import {StyledIcon} from "../../styles/StyledIcon";
import {useTranslation} from "react-i18next";

const MyPhotos = ({ currentPhoto }) => {
  const navigate = useNavigate();
  const status = useSelector((state) => state.images.status);
  const { t } = useTranslation()
  const lng = t("my photos", {returnObjects: true})
  return (
    <StyledMyPhotos>
      <div className="content">
        <div className="photos_block-header">
          <div>
            <StyledIcon src={boobs} alt="boobs" />
            <StyledH1Photos>{lng["section header"]}</StyledH1Photos>
          </div>
          <MyButton
            text={lng["section header"]}
            onClick={() => navigate("../create-nude")}
          />
        </div>
        {status === "loading" ? (
          <Loader />
        ) : (
          <div className="photo_group">
            {currentPhoto?.map((card) => (
              <PhotoGroup
                state={card.state}
                card={card}
                key={card.imageId}
              />
            ))}
          </div>
        )}
      </div>
    </StyledMyPhotos>
  );
};

export default MyPhotos;

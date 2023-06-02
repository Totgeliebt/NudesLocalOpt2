import React from "react";
import picture from "../../assets/icons/gallery-icon-large.svg";
import { StyledNoPhotos} from "../../styles/StyledMyPhotos";
import {Link} from "react-router-dom";
import { useTranslation} from "react-i18next";

const NoPhotos = () => {
  const { t } = useTranslation()
  const lng = t("my photos", {returnObjects: true})
  return (
  <StyledNoPhotos>
    <div className="content">
      <div className="no_photos">
          <img src={picture} alt="pic" />

          <p> {lng["no photos"]["title"]}
            <br />
            <Link to='/create-nude'>{lng["no photos"]["link"]}</Link>
          </p>

        </div>
      </div>
    </StyledNoPhotos>
  );
};

export default NoPhotos;

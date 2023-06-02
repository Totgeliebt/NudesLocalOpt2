import React from 'react';
import {StyledCreateNude} from "../../styles/StyledCreateNude";
import boobsIcon from "../../assets/icons/boobs-icon.svg";
import photo from "../../assets/icons/picture-icon.svg";
import jpg from "../../assets/icons/jpg-icon.svg";
import jpeg from "../../assets/icons/jpeg-icon.svg";
import png from "../../assets/icons/png-icon.svg";
import MyButton from "../../components/MyButton";
import Notification from "../../components/popups/Notification";
import {StyledH1Create} from "../../styles/StyledH1";
import {StyledH2} from "../../styles/StyledH2";
import {StyledPCreate} from "../../styles/StyledP";
import {StyledIcon} from "../../styles/StyledIcon";
import {useTranslation} from "react-i18next";

const CreateNudeComponent = ({handleFileSubmit,getInputProps,getRootProps,handlePopup, files,thumbs}) => {
  const { t } = useTranslation('create-nude');
  const lng = t("create nude", { returnObjects: true });
  return (
    <StyledCreateNude>
      <div className="content">
        <StyledIcon src={boobsIcon} alt="boobs"/>
        <StyledH1Create>{lng["section header"]}</StyledH1Create>
        <div className="block_container">
          <div className="recommendations">
            <h3>{lng["recommendations"]}</h3>
            <StyledH2>{lng["pose title"]}</StyledH2>
            <StyledPCreate>
              {lng["pose text"]}
            </StyledPCreate>
            <StyledPCreate>
              {lng["pose text2"]}
              <b> {lng["pose text2 bold"]}</b>
            </StyledPCreate>
            <StyledH2>{lng["clothes title"]}</StyledH2>
          <StyledPCreate>
            {lng["clothes text"]}
              <b> {lng["clothes text bold"]}</b>
            </StyledPCreate>
            <StyledPCreate>
              {lng["clothes text2"]}
            </StyledPCreate>
            <StyledPCreate>
              <b>
                {lng["clothes text3 bold"]}
              </b>
               {lng["clothes text3"]}
            </StyledPCreate>
          </div>
          <form className="upload" onSubmit={handleFileSubmit}>
            <section className="container">
              <div {...getRootProps({ className: "dropzone" })}>
                <div className="inner_border">
                  <input type="file" {...getInputProps()} />
                  <img className="drag" src={photo} alt="" />
                  <p className="drag">{lng["drag"]}</p>
                  <StyledPCreate>{lng["formats"]}</StyledPCreate>
                  <div className="format_icons">
                    <img className="format_icon" src={jpg} alt="jpg" />
                    <img className="format_icon" src={jpeg} alt="jpeg" />
                    <img className="format_icon" src={png} alt="png" />
                  </div>

                  <StyledPCreate>
                    {lng["photo size"]} <br />
                    <b> {lng["photo size bold"]}</b>
                  </StyledPCreate>
                </div>
              </div>
              <aside>{thumbs}</aside>
            </section>
            <MyButton btnWidth="300px" text={lng["nudify btn"]} disabled={!files.length} />
          </form>
        </div>
      </div>
      <Notification
        handlePopup={handlePopup}
        popupType={"wait"}
        text={lng["wait note"]}
      />
      <Notification
        handlePopup={handlePopup}
        popupType={"error"}
        text={lng["error note"]}
      />
    </StyledCreateNude>
  );
};

export default CreateNudeComponent;

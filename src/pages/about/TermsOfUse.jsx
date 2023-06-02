import React from "react";
import { StyledAbout, StyledPolicy } from "../../styles/StyledAbout";
import boobsIcon from "../../assets/icons/boobs-icon.svg";
import CustomLink from "../../components/header/CustomLink";
import {StyledH1} from "../../styles/StyledH1";
import {StyledH2} from "../../styles/StyledH2";
import {StyledIcon} from "../../styles/StyledIcon";
import {useTranslation} from "react-i18next";


const TermsOfUse = () => {
  const { t } = useTranslation('terms');
  const lng = t("terms of use", { returnObjects: true });
  return (
    <StyledAbout>
      <div className="about_content">
        <StyledIcon src={boobsIcon} alt="boobs" />
        <StyledH1>{lng["about"]}</StyledH1>
        <ul>
          <li>
            <CustomLink to="/about/privacy">{lng["privacy"]}</CustomLink>
          </li>
          <li>
            <CustomLink to="/about/terms-of-use">{lng["terms"]}</CustomLink>
          </li>
        </ul>
        <StyledPolicy>
          <StyledH2>{lng["terms"]}</StyledH2>
          <p>{lng["last modified"]}</p>
          <h3>{lng["company info title"]}</h3>
          {lng["company info text"]?.map((el, i) => (
            <p key={i}>{el}</p>
          ))}
          <h3>{lng["general provisions title"]}</h3>
          {lng["general provisions text"]?.map((el, i) => (
            <p key={i}>{el}</p>
          ))}
          <h3>{lng["credit title"]}</h3>
          {lng["credit text"]?.map((el, i) => (
            <p key={i}>{el}</p>
          ))}
          <h3>{lng["refund title"]}</h3>
          <p>Purchased Credits are not refundable.</p>
          <h3>{lng["changes title"]}</h3>
          <p>
            {lng["changes text"]}
          </p>
        </StyledPolicy>
      </div>
    </StyledAbout>
  );
};

export default TermsOfUse;

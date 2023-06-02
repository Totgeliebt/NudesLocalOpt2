import React from "react";
import { StyledAbout, StyledPolicy } from "../../styles/StyledAbout";
import boobsIcon from "../../assets/icons/boobs-icon.svg";
import CustomLink from "../../components/header/CustomLink";
import { StyledH1 } from "../../styles/StyledH1";
import { StyledH2 } from "../../styles/StyledH2";
import { StyledIcon } from "../../styles/StyledIcon";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation('privacy-policy');
  const lng = t("privacy policy", { returnObjects: true });
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
          <StyledH2>{lng["privacy"]}</StyledH2>
          <p>{lng["last modified"]}</p>
          <h3>{lng["general title"]}</h3>

          <p>{lng["general text"]}</p>
          <p>{lng["general text_1"]}</p>
          <h3>{lng["who we are title"]}</h3>
          <p>{lng["who we are text"]}</p>
          <h3> {lng["info title"]}</h3>
          <p> {lng["info text"]}</p>
          <h4>{lng["info subtitle1"]}</h4>
          {lng["info subtext1"]?.map((el, i) => (
            <p key={i}>{el}</p>
          ))}
          <ol>
            {lng["info subtext1 list"]?.map((elem, i) => (
              <li key={i}>{elem}</li>
            ))}
          </ol>
          <h4>{lng["info subtitle2"]}</h4>
          {lng["info subtext2"]?.map((el, i) => (
            <p key={i}>{el}</p>
          ))}
          <h3>{lng["how use info title"]}</h3>
          <p>{lng["how use info"]}</p>
          <ol>
            {lng["how use info text"]?.map((elem, i) => (
              <li key={i}>{elem}</li>
            ))}
          </ol>
          <p>{lng["how use info also"]}</p>
          <ol>
            {lng["how use info text also"]?.map((elem, i) => (
              <li key={i}>{elem}</li>
            ))}
          </ol>
          <h3>{lng["how we share title"]}</h3>
          {lng["how we share text"]?.map((el, i) => (
            <p key={i}>{el}</p>
          ))}
          <h3>{lng["how we protect title"]}</h3>
          {lng["how we protect text"]?.map((el, i) => (
            <p key={i}>{el}</p>
          ))}
        </StyledPolicy>
      </div>
    </StyledAbout>
  );
};

export default About;

import React from "react";
import { StyledAi } from "../../styles/StyledLanding";
import magicWand from "../../assets/icons/magic-wand-icon.svg";
import beforeOne from "../../assets/images/before-AI.png";
import afterOne from "../../assets/images/after-AI.png";
import beforeGroup from "../../assets/images/before-group-AI.png";
import afterGroup from "../../assets/images/after-group-AI.png";
import {StyledH2} from "../../styles/StyledH2";
import {StyledP} from "../../styles/StyledP";
import {useTranslation} from "react-i18next";

const Ai = () => {
  const { t } = useTranslation('landing')
  const lng = t("AI", {returnObjects: true})
  return (
    <StyledAi>
      <div className="block_container">
        <div className="text_content">
          <img src={magicWand} alt="magic wand" />
          <StyledH2>
            <span>{lng["ai"]}</span> {lng["section heading"]}
          </StyledH2>
          <StyledP>{lng["about AI"]}
          </StyledP>
          <StyledP>
            {lng["algorithm"]}
          </StyledP>
        </div>
        <div className="images">
          <img className="pic-1 all" src={beforeOne} alt="" />
          <img className="pic-2 all" src={afterOne} alt="" />
          <img className="pic-3 all" src={beforeGroup} alt="" />
          <img className="pic-4 all" src={afterGroup} alt="" />
        </div>
      </div>
    </StyledAi>
  );
};

export default Ai;

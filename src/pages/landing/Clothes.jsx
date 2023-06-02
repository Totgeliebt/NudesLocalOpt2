import React from "react";
import { StyledClothes } from "../../styles/StyledLanding";
import frontBottom from "../../assets/icons/body-bottom-icon.svg";
import beforeOne from "../../assets/images/clothes-before1.png";
import afterOne from "../../assets/images/clothes-after1.png";
import afterGroup from "../../assets/images/clothes-before.png";
import beforeGroup from "../../assets/images/clothes-after.png";
import {StyledH2} from "../../styles/StyledH2";
import {StyledP} from "../../styles/StyledP";
import { useTranslation } from "react-i18next";

const Clothes = () => {
  const { t } = useTranslation('landing')
  const lng = t("clothes", {returnObjects: true})
  return (
    <StyledClothes>
      <div className="block_container">
        <div className="text_content">
          <img src={frontBottom} alt="boobs" />
          <StyledH2>
            {lng["works with"]} <br />
            <span> {lng["all types of clothes"]} </span> <br />
            {lng["section heading"]}
          </StyledH2>
          <StyledP>
            {lng["unlike"]}
          </StyledP>
          <StyledP>
            {lng["no longer"]}
          </StyledP>
        </div>
        <div className="images">
          <img src={beforeGroup} alt="before" className="pic-1 all" />
          <img src={afterGroup} alt="after" className="pic-2 all" />
          <img src={beforeOne} alt="before" className="pic-3 all" />
          <img src={afterOne} alt="after" className="pic-4 all" />
        </div>
      </div>
    </StyledClothes>
  );
};

export default Clothes;

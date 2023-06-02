import React from "react";
import { StyledShapes } from "../../styles/StyledLanding";
import ass from "../../assets/icons/body-bottom-back.svg";
import before from "../../assets/images/shapes-before.png";
import before2 from "../../assets/images/shapes-before1.png";
import after from "../../assets/images/shapes-after.png";
import after2 from "../../assets/images/shapes-after1.png";
import {StyledH2} from "../../styles/StyledH2";
import {StyledP} from "../../styles/StyledP";
import { useTranslation} from "react-i18next";

const Shapes = () => {
  const { t } = useTranslation('landing')
  const lng = t("shapes", {returnObjects: true})
  return (
    <StyledShapes>
      <div className="block_container">
        <div className="text_content">
          <img src={ass} alt="boobs" />
          <StyledH2>
            {lng["works fine with"]} <br />
            <span>{lng["section heading"]}</span>
          </StyledH2>
          <StyledP>
            {lng["women"]}
          </StyledP>
          <StyledP>
            {lng["inclusive"]}
          </StyledP>
        </div>
        <div className="images">
          <img src={before} alt="before" className="pic-1 all" />
          <img src={after} alt="after" className="pic-2 all" />
          <img src={before2} alt="before" className="pic-3 all" />
          <img src={after2} alt="after" className="pic-4 all" />
        </div>
      </div>
    </StyledShapes>
  );
};

export default Shapes;

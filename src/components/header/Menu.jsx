import React from "react";
import { StyledMenu } from "../../styles/StyledHeader";
import CustomLink from "./CustomLink";
import {useTranslation} from "react-i18next";

const Menu = ({ menuWidth }) => {
  const { t } = useTranslation('landing')
  const lng = t("header", {returnObjects: true})
  return (
    <StyledMenu menuWidth={menuWidth}>
      <li>
        <CustomLink to="landing">{lng["how it works"]}</CustomLink>
      </li>
      <li>
        <CustomLink to="about">{lng["about"]}</CustomLink>
      </li>
    </StyledMenu>
  );
};

export default Menu;

import React from "react";
import { Link, useMatch } from "react-router-dom";
import { StyledCustomLink } from "../../styles/StyledCustomLink";

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);
  return (
    <StyledCustomLink>
      <Link className={match ? "active" : null} to={to} {...props}>
        {children}
      </Link>
    </StyledCustomLink>
  );
};

export default CustomLink;

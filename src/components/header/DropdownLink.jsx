import React from "react";
import { Link, useMatch } from "react-router-dom";
import {StyledDropdownLink} from "../../styles/StyledCustomLink";

const DropdownLink = ({ children, to, ...props }) => {
  const match = useMatch(to);
  return (
    <StyledDropdownLink>
      <Link className={match ? "active" : null} to={to} {...props}>
        {children}
      </Link>
    </StyledDropdownLink>
  );
};

export default DropdownLink;
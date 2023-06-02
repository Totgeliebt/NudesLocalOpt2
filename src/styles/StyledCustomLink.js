import styled from "styled-components";

export const StyledCustomLink = styled.div`
  position: relative;
  padding: 0.5em 0;
  color: black;
  font-weight: bold;
  display: block;
  transition: 0.3s;
  a:hover {
    color: #ff5c00;
  }
  a::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0.2em;
    width: 110%;
    height: 2px;
    background: #ff5c00;
    transform: translateX(-50%);
    transition: 0.3s;
    opacity: 0;
  }
  a::after {
    content: "";
    position: absolute;
    border: 5px solid transparent;
    border-top-width: 8px;
    border-top-color: #ff5c00;
    left: 50%;
    bottom: 5px;
    transform: translate(-50%, 100%);
    transition: 0.3s;
    opacity: 0;
  }
  a.active::before {
    opacity: 1;
  }
  a.active::after {
    opacity: 1;
  }
`;

export const StyledDropdownLink = styled.div`
a.active{
  color: #ff5c00;
  font-weight: 900;
}

`
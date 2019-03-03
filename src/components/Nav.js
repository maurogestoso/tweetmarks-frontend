import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledNav = styled.nav`
  background-color: #353535;
  display: flex;
  justify-content: center;
`;

const P = styled.p`
  margin: 10px;
  font-weight: 100;
  color: #f4f9f3;
`;

const StyledLink = styled(Link)`
  &:link,
  :active,
  :visited {
    color: #f4f9f3;
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
  }
  &.disabled {
    text-decoration: underline;
    pointer-events: none;
  }
`;

const Nav = ({ path }) => {
  return (
    <StyledNav>
      <P>
        <StyledLink
          to="/home"
          className={path === "/home" ? "disabled" : ""}
          href="#"
        >
          Home
        </StyledLink>
      </P>
      <P>
        <StyledLink
          to="/collections"
          className={path === "/collections" ? "disabled" : ""}
          href="#"
        >
          My Collections
        </StyledLink>
      </P>
    </StyledNav>
  );
};

Nav.propTypes = {
  path: PropTypes.string.isRequired
};

export default Nav;

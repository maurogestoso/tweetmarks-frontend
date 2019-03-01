import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Nav.css";

const Nav = ({ path }) => {
  return (
    <ul className="nav main-nav">
      <li className="nav-item">
        <Link
          to="/home"
          className={`nav-link ${path === "/home" ? "active disabled" : ""}`}
          href="#"
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/collections"
          className={`nav-link ${
            path === "/collections" ? "active disabled" : ""
          }`}
          href="#"
        >
          My Collections
        </Link>
      </li>
    </ul>
  );
};

Nav.propTypes = {
  path: PropTypes.string.isRequired
};

export default Nav;

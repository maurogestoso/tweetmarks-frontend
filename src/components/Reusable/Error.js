import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const P = styled.p`
  font-size: 12px;
  color: #c01f4b;
`;

const Error = ({ text }) => <P>{text}</P>;

Error.propTypes = {
  text: PropTypes.string.isRequired
};

export default Error;

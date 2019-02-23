import React from "react";
import PropTypes from "prop-types";

const Favourite = ({ data }) => {
  return <div>{data.text}</div>;
};

Favourite.propTypes = {
  data: PropTypes.object.isRequired
};

export default Favourite;

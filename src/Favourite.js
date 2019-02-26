import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TwitterTweetEmbed } from "react-twitter-embed";
import "./Favourite.css";

const WideButton = styled.button`
  width: 100%;
  display: block;
  margin-bottom: 5px;
`;

const Favourite = ({ data, openModal }) => {
  return (
    <div className="row d-flex justify-content-md-center tweet-container">
      <div className="col-12 col-md-10 col-lg-6">
        <TwitterTweetEmbed tweetId={data.id_str} />
        <WideButton type="button" className="btn btn-danger">
          Ignore
        </WideButton>
        <WideButton
          type="button"
          className="btn btn-light"
          onClick={openModal.bind(data)}
        >
          Add to collection
        </WideButton>
      </div>
    </div>
  );
};

Favourite.propTypes = {
  data: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired
};

export default Favourite;

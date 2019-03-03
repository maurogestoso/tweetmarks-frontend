import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TwitterTweetEmbed } from "react-twitter-embed";
import "./Favourite.css";

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  button {
    margin: 10px;
  }
`;

const BlackButton = styled.button`
  background-color: #353535;
  color: #f4f9f3;
  &:hover {
    color: #f4f9f3;
  }
`;

const Favourite = ({ data, openModal }) => {
  return (
    <div className="row" style={{ marginBottom: "40px" }}>
      <div className="col">
        <TwitterTweetEmbed tweetId={data.id_str} />
        <FlexDiv>
          <BlackButton>Ignore</BlackButton>
          <button onClick={openModal.bind(data)}>Add to collection</button>
        </FlexDiv>
      </div>
    </div>
  );
};

Favourite.propTypes = {
  data: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired
};

export default Favourite;

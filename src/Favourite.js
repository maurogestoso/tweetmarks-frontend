import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./Favourite.css";

const TweetHeaderLink = styled.a`
  color: #14171a;
  :link {
    color: #14171a;
  }
  :hover,
  :active {
    color: ${props => props.linkColor};
  }
`;

const Favourite = ({ data, linkColor }) => {
  return (
    <div className="media-container">
      <div className="media">
        <a
          href={`https://twitter.com/${data.user.screen_name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={data.user.profile_image_url_https}
            className="mr-3 profile-image-icon"
            alt={data.user.name}
          />
        </a>
        <div className="media-body">
          <TweetHeaderLink
            linkColor={linkColor}
            href={`https://twitter.com/${data.user.screen_name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6>{data.user.name}</h6>
          </TweetHeaderLink>
          <p>{data.full_text}</p>
        </div>
      </div>
    </div>
  );
};

Favourite.propTypes = {
  data: PropTypes.object.isRequired,
  linkColor: PropTypes.string
};

export default Favourite;

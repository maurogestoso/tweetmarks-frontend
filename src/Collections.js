import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import settings from "../settings";
import Nav from "./Nav";

const CollectionDiv = styled.div`
  width: 200px;
  height: 200px;
  text-align: center;
  background-color: #d8f1d5;
  margin: 10px 5px 0px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.8;
  }
`;

const CollectionName = styled.div`
  font-size: 1.6rem;
  font-weight: 100;
  color: #3e3f3e;
`;

const StyledLink = styled(Link)`
  &:link,
  :visited,
  :hover {
    color: rgb(33, 37, 41);
    text-decoration: none;
  }
`;

const { API_ROOT } = settings[process.env.NODE_ENV];

class Collections extends React.Component {
  state = {
    collections: []
  };

  componentDidMount() {
    this.fetchCollections();
  }

  fetchCollections = async () => {
    try {
      const res = await axios.get(`${API_ROOT}/api/collections`, {
        withCredentials: true
      });
      this.setState({
        collections: res.data.collections
      });
    } catch (err) {
      if (!err.response) throw err;
    }
  };

  render() {
    return (
      <div>
        <Nav path={location.pathname} />
        <h1>All my collections</h1>
        <div className="text-right">
          <Link to="/collections/new">
            <button className="btn btn-light">
              <FontAwesomeIcon icon="plus" />
              <span style={{ marginLeft: "10px" }}>Create new collection</span>
            </button>
          </Link>
        </div>
        <div className="d-flex">
          {this.state.collections.map((collection, i) => (
            <StyledLink
              to={`/collections/${collection._id}`}
              key={i}
              className="collectionLink"
            >
              <CollectionDiv>
                <CollectionName>{collection.name}</CollectionName>
              </CollectionDiv>
            </StyledLink>
          ))}
        </div>
      </div>
    );
  }
}

Collections.propTypes = {
  location: PropTypes.object.isRequired
};

export default Collections;

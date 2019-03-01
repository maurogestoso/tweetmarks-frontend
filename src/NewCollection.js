import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import styled from "styled-components";
import Nav from "./Nav";
import settings from "../settings";
const { API_ROOT } = settings[process.env.NODE_ENV];

const Error = styled.p`
  color: #c01f4b;
  font-size: 0.8em;
`;

class NewCollection extends React.Component {
  state = {
    name: ""
  };

  updateName = e => {
    this.setState({
      name: e.target.value
    });
  };

  createCollection = e => {
    e.preventDefault();
    try {
      axios.post(
        `${API_ROOT}/api/collections`,
        {
          name: this.state.name
        },
        {
          withCredentials: true
        }
      );
      this.props.history.push("/collections");
    } catch (e) {
      if (e.response) {
        this.setState({
          error: "Something went wrong"
        });
      } else {
        throw e;
      }
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <Nav path={location.pathname} />
          <h1>Create a new collection</h1>
          <form>
            <div className="form-group">
              <label htmlFor="collectionName">Collection Name</label>
              <input
                type="text"
                onChange={this.updateName}
                className="form-control"
                id="collectionName"
                value={this.state.collectionName}
              />
            </div>
            <button className="btn btn-primary" onClick={this.createCollection}>
              Create
            </button>
            {this.state.error && <Error>{this.state.error}</Error>}
          </form>
        </div>
      </div>
    );
  }
}

NewCollection.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default NewCollection;

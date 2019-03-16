import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import settings from "../../settings";
const { API_ROOT } = settings[process.env.NODE_ENV];

import ModalHeader from "./ModalHeader";
import Error from "./Reusable/Error";

const AddToCollectionOpt = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

Modal.setAppElement("#root");
const customStyles = {
  content: {
    border: "1px solid #353535",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#fff",
    minWidth: "500px"
  }
};

class AddToCollection extends React.Component {
  state = {
    addToCollectionError: null
  };

  addToCollection = async collectionId => {
    try {
      await axios.put(
        `${API_ROOT}/api/favorites/${this.props.selectedFavouriteId}`,
        {
          collection_id: collectionId
        },
        {
          withCredentials: true
        }
      );
      this.props.removeFavouriteFromList(this.props.selectedFavouriteId);
      this.props.closeModal();
    } catch (e) {
      if (!e.response) throw e;
      else {
        const m =
          (e.response && e.response.data && e.response.data.message) ||
          "Something went wrong";
        this.setState({
          addToCollectionError: m
        });
      }
    }
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onAfterOpen={this.props.afterOpenModal}
        onRequestClose={this.props.closeModal}
        style={customStyles}
        contentLabel="Add Tweet to a collection"
      >
        <div>
          <ModalHeader
            title="Add Tweet to a collection"
            closeModal={this.props.closeModal}
          />
          <div>
            <ul>
              {this.props.collections.map((collection, i) => (
                <AddToCollectionOpt
                  className="list-group-item"
                  key={i}
                  onClick={() => this.addToCollection(collection._id)}
                >
                  {collection.name}
                </AddToCollectionOpt>
              ))}
            </ul>
            {this.state.addToCollectionError && (
              <Error text={this.state.addToCollectionError} />
            )}
          </div>
          <div className="modal-footer">
            <Link to="/collections/new">
              <button>
                <FontAwesomeIcon icon="plus" />
                <span style={{ marginLeft: "10px" }}>
                  Create new collection
                </span>
              </button>
            </Link>
          </div>
        </div>
      </Modal>
    );
  }

  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    afterOpenModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    collections: PropTypes.array.isRequired,
    selectedFavouriteId: PropTypes.string,
    removeFavouriteFromList: PropTypes.func.isRequired
  };
}

export default AddToCollection;

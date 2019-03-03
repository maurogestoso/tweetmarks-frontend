import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ModalHeader from "./ModalHeader";

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
                <AddToCollectionOpt className="list-group-item" key={i}>
                  {collection.name}
                </AddToCollectionOpt>
              ))}
            </ul>
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
    collections: PropTypes.array.isRequired
  };
}

export default AddToCollection;

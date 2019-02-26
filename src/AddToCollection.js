import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CollectionNameItem = styled.li`
  &:hover {
    cursor: pointer;
    background: #a8fccc;
  }
`;

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "none",
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
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Tweet to a collection</h5>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={this.props.closeModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ul className="list-group">
              {this.props.collections.map(collection => (
                <CollectionNameItem
                  className="list-group-item"
                  key={collection.id}
                >
                  {collection.name}
                </CollectionNameItem>
              ))}
              <CollectionNameItem className="list-group-item">
                <FontAwesomeIcon icon="plus" />
                <span style={{ marginLeft: "10px" }}>
                  Create new collection
                </span>
              </CollectionNameItem>
            </ul>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.props.closeModal}
            >
              Close
            </button>
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

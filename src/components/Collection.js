import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import styled from "styled-components";
import Modal from "react-modal";
import Nav from "./Nav";
import ModalHeader from "./ModalHeader";

import settings from "../../settings";
const { API_ROOT } = settings[process.env.NODE_ENV];

const DeleteP = styled.p`
  color: #c01f4b;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    font-weight: 600;
  }
`;

const ErrorP = styled.p`
  color: #c01f4b;
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

class Collection extends React.Component {
  state = {
    collection: {},
    modalIsOpen: false
  };

  openModal = favourite => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false, deleteError: null });
  };

  deleteCollection = async () => {
    const id = this.props.match.params.collectionId;
    try {
      const res = await axios.delete(`${API_ROOT}/api/collections/${id}`, {
        withCredentials: true
      });
      console.log(res);
      this.props.history.push("/collections");
    } catch (e) {
      if (!e.response) throw e;
      else {
        this.setState({
          deleteError: "Something went wrong"
        });
      }
    }
  };

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Delete this collection?"
        >
          <div>
            <ModalHeader
              title="Delete this collection?"
              closeModal={this.closeModal}
            />
            <button onClick={this.deleteCollection}>Yes, Delete</button>
            {this.state.deleteError && (
              <ErrorP>{this.state.deleteError}</ErrorP>
            )}
          </div>
        </Modal>
        <Nav path={`/collections/${this.state.collection._id}`} />
        <div className="container">
          <h1 style={{ textAlign: "center" }}>Collection</h1>

          <div className="row" style={{ textAlign: "right" }}>
            <DeleteP onClick={this.openModal}>Delete collection</DeleteP>
          </div>
        </div>
      </div>
    );
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
}

export default Collection;

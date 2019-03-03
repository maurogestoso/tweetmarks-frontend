import React from "react";
import PropTypes from "prop-types";

const ModalHeader = ({ title, closeModal }) => (
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <h5 className="modal-title">{title}</h5>
    <button
      onClick={closeModal}
      style={{ backgroundColor: "#353535", color: "#fff" }}
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
);

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default ModalHeader;

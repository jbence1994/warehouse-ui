import React from "react";

const ModalBody = ({ productName }) => {
  return (
    <div className="modal-body">
      <p>
        A(z) <span style={{ fontWeight: "bold" }}>{productName}</span> nevű
        terméket sikeresen nyilvántartásba vette.
      </p>
    </div>
  );
};

export default ModalBody;

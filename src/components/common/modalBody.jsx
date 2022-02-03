import React from "react";

// TODO: Common component should not know about products, etc. Need to re-design.
const ModalBody = ({ productName }) => {
  return (
    <div className="modal-body">
      <p>
        A(z) <span style={{ fontWeight: "bold" }}>{productName}</span> nevű
        termék sikeresen nyilvántartásba került.
      </p>
    </div>
  );
};

export default ModalBody;

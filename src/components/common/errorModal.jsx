import React from "react";

import ErrorModalFooter from "./errorModalFooter";

const ErrorModal = ({ title, content, buttonText, onClick }) => {
  return (
    <div className="modal-dialog modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{title}</h5>
      </div>
      <div className="modal-body">
        <p>{content}</p>
      </div>
      <ErrorModalFooter buttonText={buttonText} onClick={onClick} />
    </div>
  );
};

export default ErrorModal;

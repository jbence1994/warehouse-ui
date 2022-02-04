import React from "react";

import ModalHeader from "./modalHeader";
import ModalBody from "./modalBody";
import ErrorModalFooter from "./errorModalFooter";

const ErrorModal = ({ headerTitle, bodyContent, buttonText, onClick }) => {
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <ModalHeader title={headerTitle} />
        <ModalBody bodyContent={bodyContent} />
        <ErrorModalFooter buttonText={buttonText} onClick={onClick} />
      </div>
    </div>
  );
};

export default ErrorModal;

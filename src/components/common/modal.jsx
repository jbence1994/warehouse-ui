import React from "react";

import ModalHeader from "./modalHeader";
import ModalBody from "./modalBody";
import ModalFooter from "./modalFooter";

const Modal = () => {
  return (
    <div className="modal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <ModalHeader />
          <ModalBody />
          <ModalFooter />
        </div>
      </div>
    </div>
  );
};

export default Modal;

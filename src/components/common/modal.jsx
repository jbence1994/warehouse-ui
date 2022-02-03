import React from "react";

import ModalHeader from "./modalHeader";
import ModalBody from "./modalBody";
import ModalFooter from "./modalFooter";

const Modal = ({ title, shouldShow, productName = "Lófasz" }) => {
  return (
    <div className={shouldShow ? "" : "modal"} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <ModalHeader title={title} />
          <ModalBody productName={productName} />
          <ModalFooter />
          <code>Should show modal: {JSON.stringify(shouldShow)}</code>
        </div>
      </div>
    </div>
  );
};

export default Modal;

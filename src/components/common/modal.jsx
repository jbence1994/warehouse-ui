import React from "react";

import ModalHeader from "./modalHeader";
import ModalBody from "./modalBody";
import ModalFooter from "./modalFooter";

const Modal = ({
  shouldShow,
  headerTitle,
  bodyContent,
  modalFooterButtonText,
  modalFooterRoutingButtonText,
  modalFooterRoutingButtonRoute,
  onClick,
}) => {
  return (
    // TODO: set className back to "modal".
    <div className="" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <ModalHeader title={headerTitle} />
          <ModalBody bodyContent={bodyContent} />
          <ModalFooter
            buttonText={modalFooterButtonText}
            routingButtonText={modalFooterRoutingButtonText}
            routingButtonRoute={modalFooterRoutingButtonRoute}
            onClick={onClick}
          />
          <code>Should show modal: {JSON.stringify(shouldShow)}</code>
        </div>
      </div>
    </div>
  );
};

export default Modal;

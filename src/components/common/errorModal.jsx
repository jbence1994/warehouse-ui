import React from "react";

import ModalHeader from "./modalHeader";
import ModalBody from "./modalBody";
import ErrorModalFooter from "./errorModalFooter";

const ErrorModal = ({
  shouldShow,
  headerTitle,
  bodyContent,
  buttonText,
  onClick,
}) => {
  return (
    // TODO: set className back to "modal".
    <div className="" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <ModalHeader title={headerTitle} />
          <ModalBody bodyContent={bodyContent} />
          <ErrorModalFooter buttonText={buttonText} onClick={onClick} />
          <code>Should show modal: {JSON.stringify(shouldShow)}</code>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;

import React from "react";

import ModalHeader from "./modalHeader";
import ModalBody from "./modalBody";
import SuccessModalFooter from "./successModalFooter";

const SuccessModal = ({
  shouldShow,
  headerTitle,
  bodyContent,
  footerButtonText,
  footerRoutingButtonText,
  footerRoutingButtonRoute,
  onClick,
}) => {
  return (
    // TODO: set className back to "modal".
    <div className="" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <ModalHeader title={headerTitle} />
          <ModalBody bodyContent={bodyContent} />
          <SuccessModalFooter
            buttonText={footerButtonText}
            routingButtonText={footerRoutingButtonText}
            routingButtonRoute={footerRoutingButtonRoute}
            onClick={onClick}
          />
          <code>Should show modal: {JSON.stringify(shouldShow)}</code>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;

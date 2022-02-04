import React from "react";

import ModalHeader from "./modalHeader";
import ModalBody from "./modalBody";
import SuccessModalFooter from "./successModalFooter";

const SuccessModal = ({
  headerTitle,
  bodyContent,
  footerButtonText,
  footerRoutingButtonText,
  footerRoutingButtonRoute,
  onClick,
}) => {
  return (
    <div className="modal-dialog modal-content">
      <ModalHeader title={headerTitle} />
      <ModalBody bodyContent={bodyContent} />
      <SuccessModalFooter
        buttonText={footerButtonText}
        routingButtonText={footerRoutingButtonText}
        routingButtonRoute={footerRoutingButtonRoute}
        onClick={onClick}
      />
    </div>
  );
};

export default SuccessModal;

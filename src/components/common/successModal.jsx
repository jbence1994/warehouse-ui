import React from "react";

import SuccessModalFooter from "./successModalFooter";

const SuccessModal = ({
  title,
  content,
  footerButtonText,
  footerRoutingButtonText,
  footerRoutingButtonRoute,
  onClick,
}) => {
  return (
    <div className="modal-dialog modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{title}</h5>
      </div>
      <div className="modal-body">
        <p>{content}</p>
      </div>
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

import React from "react";
import { Link } from "react-router-dom";

const SuccessModalFooter = ({
  buttonText,
  routingButtonText,
  routingButtonRoute,
  onClick,
}) => {
  return (
    <div className="modal-footer">
      <button type="button" className="btn btn-primary" onClick={onClick}>
        {buttonText}
      </button>
      <Link
        className="btn btn-secondary"
        data-dismiss="modal"
        to={routingButtonRoute}
      >
        {routingButtonText}
      </Link>
    </div>
  );
};

export default SuccessModalFooter;

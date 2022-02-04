import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Modal = ({
  title,
  content,
  buttonText,
  routingButtonText = "",
  redirectUrl = "",
  isSuccessModal = true,
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
      <div className="modal-footer">
        {isSuccessModal ? (
          <Fragment>
            <button type="button" className="btn btn-primary" onClick={onClick}>
              {buttonText}
            </button>
            <Link
              className="btn btn-secondary"
              data-dismiss="modal"
              to={redirectUrl}
            >
              {routingButtonText}
            </Link>
          </Fragment>
        ) : (
          <button type="button" className="btn btn-danger" onClick={onClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;

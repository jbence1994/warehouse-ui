import React from "react";

const ErrorModalFooter = ({ buttonText, onClick }) => {
  return (
    <div className="modal-footer">
      <button type="button" className="btn btn-danger" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default ErrorModalFooter;

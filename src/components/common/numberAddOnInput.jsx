import React, { Fragment } from "react";

const NumberAddOnInput = ({
  name,
  value,
  minValue = 1,
  addOnText,
  errorMessage,
  onChange,
}) => {
  return (
    <Fragment>
      <div className="input-group mb-3">
        <input
          type="number"
          name={name}
          value={value}
          min={minValue}
          className="form-control"
          onChange={onChange}
        />
        <span className="input-group-text">{addOnText}</span>
      </div>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </Fragment>
  );
};

export default NumberAddOnInput;

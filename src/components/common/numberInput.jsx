import React, { Fragment } from "react";

const NumberInput = ({ name, labelText, minValue, onChange, errorMessage }) => {
  return (
    <Fragment>
      <div className="form-group">
        <label htmlFor={name}>{labelText}</label>
        <input
          type="number"
          className="form-control"
          name={name}
          id={name}
          min={minValue}
          onChange={onChange}
        />
      </div>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </Fragment>
  );
};

export default NumberInput;

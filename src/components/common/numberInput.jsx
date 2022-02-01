import React, { Fragment } from "react";

const NumberInput = ({ labelText, name, value, errorMessage, onChange }) => {
  return (
    <Fragment>
      <div className="form-group">
        <label htmlFor={name}>{labelText}</label>
        <input
          type="number"
          className="form-control"
          min={0}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </Fragment>
  );
};

export default NumberInput;

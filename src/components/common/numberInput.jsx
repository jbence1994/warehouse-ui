import React, { Fragment } from "react";

const NumberInput = ({
  name,
  value,
  minValue,
  labelText,
  errorMessage = "",
  onChange,
}) => {
  return (
    <Fragment>
      <div className="form-group">
        <label htmlFor={name}>{labelText}</label>
        <input
          type="number"
          className="form-control"
          id={name}
          name={name}
          value={value}
          min={minValue}
          onChange={onChange}
        />
      </div>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </Fragment>
  );
};

export default NumberInput;

import React from "react";

const NumberInput = ({ name, labelText, minValue, onChange, errorMessage }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default NumberInput;

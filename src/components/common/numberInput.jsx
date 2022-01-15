import React from "react";

const NumberInput = ({ labelText, name, value, errorMessage, onChange }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default NumberInput;

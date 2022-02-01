import React, { Fragment } from "react";

const TextInput = ({ labelText, name, value, errorMessage, onChange }) => {
  return (
    <Fragment>
      <div className="form-group">
        <label htmlFor={name}>{labelText}</label>
        <input
          type="text"
          className="form-control"
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

export default TextInput;

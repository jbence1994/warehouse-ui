import React, { Fragment } from "react";

// TODO: generalize this to a reusable component.

// TODO: Separate this to an input group and a SupplyCounter.

const Counter = ({ name, minValue, addOnText, errorMessage, onChange }) => {
  return (
    <Fragment>
      <div className="input-group mb-3">
        <input
          type="number"
          name={name}
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

export default Counter;

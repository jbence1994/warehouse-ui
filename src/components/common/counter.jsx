import React from "react";

// TODO: generalize this to a reusable component.

// TODO: add errorMessage prop.

// TODO: Separate this to an input group and a SupplyCounter.

const Counter = ({ name, minValue, addOnText, onChange }) => {
  return (
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
  );
};

export default Counter;

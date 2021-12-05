import React from "react";

const Counter = ({ name, minValue, onChange }) => {
  return (
    <div className="form-group">
      <input
        name={name}
        min={minValue}
        type="number"
        className="form-control"
        onChange={onChange}
      />
    </div>
  );
};

export default Counter;

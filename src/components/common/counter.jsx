import React, { Fragment } from "react";

import AddOnInput from "./addOnInput";

// TODO: Separate this to an input group and a SupplyCounter.

const Counter = ({ name, minValue, addOnText, errorMessage, onChange }) => {
  return (
    <AddOnInput
      type="number"
      name={name}
      minValue={1}
      addOnText={addOnText}
      errorMessage={errorMessage}
      onChange={onChange}
    />
  );
};

export default Counter;

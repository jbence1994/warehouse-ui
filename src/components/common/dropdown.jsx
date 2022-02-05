import React, { Fragment } from "react";

const Dropdown = ({ name, value, labelText, data, errorMessage, onChange }) => {
  return (
    <Fragment>
      <div className="form-group">
        <label>{labelText}</label>
        <select
          className="form-control"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        >
          <option value={0}>{""}</option>
          {data.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </Fragment>
  );
};

export default Dropdown;

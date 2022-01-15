import React from "react";

const Dropdown = ({ labelText, name, errorMessage, data, onChange }) => {
  return (
    <React.Fragment>
      <div className="form-group">
        <label>{labelText}</label>
        <select
          className="form-control"
          id={name}
          name={name}
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
    </React.Fragment>
  );
};

export default Dropdown;

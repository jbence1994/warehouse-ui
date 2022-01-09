import React from "react";

const Submit = ({ text, width = "100%" }) => {
  return (
    <div className="form-group">
      <button className="btn btn-primary" style={{ width: width }}>
        {text}
      </button>
    </div>
  );
};

export default Submit;

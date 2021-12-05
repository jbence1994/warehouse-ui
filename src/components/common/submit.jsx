import React from "react";

const Submit = ({ text = "Mentés", width = "100%" }) => {
  return (
    <div className="form-group">
      <button className="btn btn-primary" style={{ width: width }}>
        {text}
      </button>
    </div>
  );
};

export default Submit;

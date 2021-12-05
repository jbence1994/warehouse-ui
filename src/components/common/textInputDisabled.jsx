import React from "react";

const TextInputDisabled = ({ content }) => {
  return (
    <div className="form-group">
      <input type="text" className="form-control" value={content} disabled />
    </div>
  );
};

export default TextInputDisabled;

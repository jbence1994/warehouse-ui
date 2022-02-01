import React from "react";

const FileInput = ({ name, isDisabled, onChange }) => {
  return (
    <input
      type="file"
      id={name}
      name={name}
      className="form-control-file"
      onChange={onChange}
      style={{
        position: "absolute",
        inset: "0",
        opacity: "0",
      }}
      disabled={isDisabled}
    />
  );
};

export default FileInput;

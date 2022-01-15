import React from "react";

const Form = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} noValidate>
      {children}
    </form>
  );
};

export default Form;

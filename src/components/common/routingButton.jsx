import React from "react";
import { Link } from "react-router-dom";

const Button = ({ url, text }) => {
  return (
    <Link className="btn btn-primary" to={url}>
      {text}
    </Link>
  );
};

export default Button;

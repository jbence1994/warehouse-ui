import React from "react";
import { Link } from "react-router-dom";

const NavbarBrand = ({ title, route }) => {
  return (
    <Link className="navbar-brand" to={route}>
      {title}
    </Link>
  );
};

export default NavbarBrand;

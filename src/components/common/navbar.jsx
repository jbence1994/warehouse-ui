import React, { useState } from "react";

import NavbarBrand from "./navbarBrand";
import NavbarLinks from "./navbarLinks";
import NavbarTogglerButton from "./navbarTogglerButton";
import NavbarCollapse from "./navbarCollapse";

const Navbar = ({ title, homeRoute, routes }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-dark border-bottom box-shadow mb-3">
        <div className="container">
          <NavbarBrand title={title} route={homeRoute} />
          <NavbarTogglerButton isOpen={isOpen} toggle={toggle} />
          <NavbarCollapse isOpen={isOpen}>
            <NavbarLinks routes={routes} />
          </NavbarCollapse>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

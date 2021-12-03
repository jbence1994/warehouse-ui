import React from "react";

const NavbarTogglerButton = ({ isOpen, toggle }) => {
  const getNavbarTogglerClass = () => "navbar-toggler";

  return (
    <button
      className={
        isOpen
          ? getNavbarTogglerClass()
          : `${getNavbarTogglerClass()} collapsed`
      }
      type="button"
      onClick={toggle}
      data-toggle="collapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
  );
};

export default NavbarTogglerButton;

import React from "react";

const NavbarCollapse = ({ isOpen, children }) => {
  const getNavbarCollapseClass = () =>
    "navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse";

  return (
    <div
      className={
        isOpen ? getNavbarCollapseClass() : `${getNavbarCollapseClass()} show`
      }
    >
      {children}
    </div>
  );
};

export default NavbarCollapse;

import { Link } from "react-router-dom";

const NavbarLinks = ({ routes }) => {
  return (
    <div className="navbar-nav flex-grow">
      {routes.map((route) => (
        <Link key={route.name} className="nav-item nav-link" to={route.path}>
          {route.name}
        </Link>
      ))}
    </div>
  );
};
export default NavbarLinks;

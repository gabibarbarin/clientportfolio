import { NavLink } from "react-router-dom";
import "./style.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  const LINKS = [
    { name: "Home", route: "/" },
    {
      name: "Sobre Mi",
      route: "/about-me",
    },
    {
      name: "Curriculum",
      route: "/curriculum",
    },
    {
      name: "Contacto",
      route: "/contact",
    },
  ];
  const location = useLocation().pathname;
  return (
    <nav className="navbar navbar-dark navbar-expand-lg ps-2 fixed-top shadow-sm">
      <div className="container-fluid flex align-items-center py-1">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse justify-content-center navbar-collapse ms-lg-4 mt-2 mt-lg-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav text-md ms-lg-3 mt-1 mb-2 mb-lg-0">
            {LINKS &&
              LINKS.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.route}
                    className="nav-item me-0 me-lg-3 d-block mb-1 mb-lg-0"
                    activeClassName={location === link.route && "active"}
                  >
                    {link.name.toUpperCase()}
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

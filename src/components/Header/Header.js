import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="shadow">
      <div className="container mx-auto d-flex align-items-center justify-content-between py-3">
        <h1 className="text-primary fs-4 m-0">Rick and Morty</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link text-decoration-underline" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/episode"
                className={({ isActive }) =>
                  isActive ? "nav-link text-decoration-underline" : "nav-link"
                }
              >
                Episode
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/location"
                className={({ isActive }) =>
                  isActive ? "nav-link text-decoration-underline" : "nav-link"
                }
              >
                Location
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

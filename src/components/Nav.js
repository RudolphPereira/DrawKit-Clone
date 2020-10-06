import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const logoImage =
  "https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5bf413a0903391cd594d9321_logo-export-5.png";
const igLink = "https://www.instagram.com/drawkit.io/";
const twLink = "https://twitter.com/UseDrawKit";

function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/Drawkit-Clone">
        <img src={logoImage} alt="nav__logo" className="nav__logo" />
      </NavLink>

      <ul className="nav__list">
        <NavLink
          to="/Drawkit-Clone"
          exact
          activeClassName="active__class"
          className="nav__items"
        >
          <li>ILLUSTRATIONS</li>
        </NavLink>
        <NavLink
          to="/Free-Icons"
          exact
          activeClassName="active__class"
          className="nav__items"
        >
          <li>ICONS</li>
        </NavLink>
        <NavLink
          to="/"
          exact
          activeClassName="active__class"
          className="nav__items"
        >
          <li>REQUESTS</li>
        </NavLink>
        <li className="nav__icon">
          <a href={twLink} target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="nav__icon">
          <a href={igLink} target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

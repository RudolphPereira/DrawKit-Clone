import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <img
        src="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5bf413a0903391cd594d9321_logo-export-5.png"
        alt="logo"
        className="nav__logo"
      />

      <ul className="nav__list">
        <li className="nav__items">ILLUSTRATIONS</li>
        <li className="nav__items">ICONS</li>
        <li className="nav__items">REQUESTS</li>
        <li className="nav__icon">
          <i className="fab fa-twitter"></i>
        </li>
        <li className="nav__icon">
          <i className="fab fa-instagram"></i>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

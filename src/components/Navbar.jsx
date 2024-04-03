import React, { useState } from "react";
import pizzaLogo from "../assets/pizzaLogo.png";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css"
        integrity="sha512-OQDNdI5rpnZ0BRhhJc+btbbtnxaj+LdQFeh0V9/igiEPDiWE2fG+ZsXl0JEH+bjXKPJ3zcXqNyP4/F/NegVdZg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <img src={pizzaLogo} />
          <div className="hiddenLinks">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>

        <div className="rightSide">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link" : "nav-no-active"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link" : "nav-no-active"
            }
            to="/menu"
          >
            Menu
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link" : "nav-no-active"
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link" : "nav-no-active"
            }
            to="/contact"
          >
            Contact
          </NavLink>
          <button onClick={toggleNavbar}>
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;

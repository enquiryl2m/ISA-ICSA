import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronDown } from "react-icons/fa";
import "../../public/CSS/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const handleNavClick = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top"
      data-aos="fade-down"
    >
      <div className="container-fluid">

        {/* Logo */}
        <NavLink
          className="navbar-brand fw-bold text-navy"
          to="/"
          onClick={handleNavClick}
        >
          <img
            src="/public/images/logo.jpg"
            alt="logo"
            className="nav-logo"
          />
        </NavLink>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">

            {/* Home */}
            <li className="nav-item">
              <NavLink
                className="nav-link text-navy"
                to="/"
                end
                onClick={handleNavClick}
              >
                Home
              </NavLink>
            </li>

            {/* About Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link text-navy d-flex align-items-center gap-1 border-0 bg-transparent"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                About
                <FaChevronDown
                  size={12}
                  style={{
                    transition: "transform 0.3s ease",
                    transform: dropdownOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              </button>

              <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>

                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/about/company-overview"
                    onClick={handleNavClick}
                  >
                    Company Overview
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/about/QualityPolicy"
                    onClick={handleNavClick}
                  >
                    Quality Policy
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/about/leadership"
                    onClick={handleNavClick}
                  >
                    Leadership
                  </NavLink>
                </li>

              </ul>
            </li>

            {/* Public Information */}
            <li className="nav-item">
              <NavLink
                className="nav-link text-navy"
                to="/publicinformation"
                onClick={handleNavClick}
              >
                Public Information
              </NavLink>
            </li>


            {/* Contact */}
            <li className="nav-item">
              <NavLink
                className="nav-link text-navy"
                to="/contact"
                onClick={handleNavClick}
              >
                Contact
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
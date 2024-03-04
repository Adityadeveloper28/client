import React from "react";
import { Link } from "react-router-dom";
import { scrollToComponent } from "../ScrollTo";
import "./Navbar.css";

function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll behavior
    });
  };
  const handleLinkClick = (componentId) => {
    scrollToComponent(componentId);
  };
  return (
    <nav
      className="navbar  navbar-expand-lg navbar-dark border-bottom sticky-top  p-1 "
      id="main"
    >
      <div className="container-fluid ">
        <Link to="/" className="navbar-brand fw-bolder">
          VNPS
        </Link>
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
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ marginLeft: "auto" }}
          >
            <li className="nav-item ms-2">
              <Link className="nav-link" onClick={scrollToTop}>
                <button type="button" class="btn  fw-bolder add">
                  Home
                </button>
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link
                className="nav-link"
                onClick={() => handleLinkClick("about")}
              >
                <button type="button" class="btn fw-bolder add">
                  About
                </button>
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link
                className="nav-link"
                onClick={() => handleLinkClick("track")}
              >
                <button type="button" class="btn  fw-bolder add">
                  Track
                </button>
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link
                className="nav-link"
                onClick={() => handleLinkClick("rule")}
              >
                <button type="button" class="btn   fw-bolder add">
                  Rules{" "}
                </button>
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link
                className="nav-link"
                onClick={() => handleLinkClick("contact")}
              >
                <button type="button" class="btn  fw-bolder add">
                  Contact
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import "./Footer.css";
import { scrollToComponent } from "../ScrollTo";
import { Link } from "react-router-dom";
function Footer() {
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
    <div className="conatiner-fluid bg-dark mt-5 foot">
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">VNPS'24</div>
            <div className="footer-links">
              <ul className="footer-menu">
                <li>
                  <Link onClick={scrollToTop}>Home</Link>
                </li>
                <li>
                  <Link onClick={() => handleLinkClick("about")}>About</Link>
                </li>
                <li>
                  <Link onClick={() => handleLinkClick("track")}>Tracks</Link>
                </li>
                <li>
                  <Link onClick={() => handleLinkClick("rule")}>Rules</Link>
                </li>
                <li>
                  <Link onClick={() => handleLinkClick("contact")}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom"style={{fontFamily:'Anta'}}>
            <p>© 2024 VNPS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

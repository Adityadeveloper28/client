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
            <div className="footer-social">
              <ul className="social-icons">
                <li>
                  <a href="https://www.facebook.com/csi.vcet.1">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
               
                <li>
                  <a href="https://www.instagram.com/csi_vcet">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/csi-vcet-65b4151b5/">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 VNPS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

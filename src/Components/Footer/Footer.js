import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="conatiner-fluid bg-dark mt-5 foot">
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">OSCILLATIONS'24</div>
            <div className="footer-links">
              <ul className="footer-menu">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Tracks</a>
                </li>
                <li>
                  <a href="#">Rules</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-social">
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Oscillations. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

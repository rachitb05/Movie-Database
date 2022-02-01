import React from "react";
import "./Footer.css";
function Footer() {
  var dt = new Date();
  var year = dt.getFullYear();
  return (
    <div className="footer-container">
      <hr />
      <a className="footer-link" href="https://www.linkedin.com/in/rachitb05/">
        LinkedIn
      </a>
      <a className="footer-link" href="https://www.instagram.com/rachitb_05/">
        Instagram
      </a>
      <a className="footer-link" href="https://github.com/rachitb05">
        GitHub
      </a>
      <p className="trademark">© {year} Rachit Bhatia.</p>
    </div>
  );
}

export default Footer;

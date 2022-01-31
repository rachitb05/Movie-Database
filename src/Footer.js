import React from "react";
import "./Footer.css";
function Footer() {
  var dt = new Date();
  var year = dt.getFullYear();
  return (
    <div className="footer-container">
      <hr />
      <a class="footer-link" href="https://www.linkedin.com/in/rachitb05/">
        LinkedIn
      </a>
      <a class="footer-link" href="https://www.instagram.com/rachitb_05/">
        Instagram
      </a>
      <a class="footer-link" href="https://github.com/rachitb05">
        GitHub
      </a>
      <p class="trademark">© {year} Rachit Bhatia.</p>
    </div>
  );
}

export default Footer;

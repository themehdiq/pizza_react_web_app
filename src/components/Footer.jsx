import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css"
          integrity="sha512-OQDNdI5rpnZ0BRhhJc+btbbtnxaj+LdQFeh0V9/igiEPDiWE2fG+ZsXl0JEH+bjXKPJ3zcXqNyP4/F/NegVdZg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <div className="footer">
        <div className="socialMedia">
          <i className="ri-instagram-line"></i>
          <i className="ri-twitter-x-line"></i>
          <i className="ri-facebook-box-fill"></i>
          <i className="ri-linkedin-box-fill"></i>
        </div>

        <p>&copy; 2024 mehdiqepizza.com</p>
      </div>
    </>
  );
}

export default Footer;

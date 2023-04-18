import React from "react";

function Footer() {
  return (
    <div className="footer">
      <img
        src="https://www.premierautospapasadena.com/uploads/b/0dc07a11fc17871c497d06dc02551868cd98327ebff285bebf910264535568b2/IMG_901B9C3470E4-1_1676057924.jpeg?width=2400&optimize=medium"
        alt="Logo"
      />
      <div className="footer-email-container">
        <h2>Stay in the Loop</h2>
        <div className="footer-email-input">
          <input type="email" placeholder="Email" id="email" name="email" />
          <button>Sign Up</button>
        </div>
      </div>
      <div className="footer-copyright">
        <p>©PremierAutoSpa 2023 TFSS</p>
      </div>
    </div>
  );
}

export default Footer;

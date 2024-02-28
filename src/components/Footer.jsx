import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="logo">GenZ</h1>
      <div>
        <ul className="list">
          <h3>Explore</h3>
          <li>Home</li>
          <li>About</li>
          <li>Careers</li>
          <li>New Launchs</li>
        </ul>
      </div>
      <div>
        <ul className="list">
          <h3>Social Media</h3>
          <li>Youtube</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Linkedin</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

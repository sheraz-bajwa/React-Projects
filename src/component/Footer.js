import React from "react";
import "../Footer.css"; // Import the CSS file
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>.</h3>
         
        </div>
        <div className="footer-center">
          <div className="social-icons">
            <a href="#" className="cnt">
              <FaLinkedin size={15} />
            </a>{" "}
            <a href="#" className="cnt">
              <FaGithub size={15} />
            </a>{" "}
            <a href="#" className="cnt">
              <FaTwitter size={15} />
            </a>{" "}
            <a href="#" className="cnt">
              <FaFacebook size={15} />
            </a>
           
          </div>
          <p>&copy; 2023 All rights reserved</p>
         
          </div>
        <div className="footer-right">
           <p>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

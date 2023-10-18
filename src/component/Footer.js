import React from 'react';
import '../Footer.css'; // Import the CSS file
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Your Company Name</h3>
          <p>Contact: sheezybajwa@gmail.com</p>
          <div className="social-icons">
            <a href="#">
              <FaFacebook size={30} />
            </a>
            <a href="#">
              <FaTwitter size={30} />
            </a>
            <a href="#">
              <FaInstagram size={30} />
            </a>
            <a href="#">
                <FaGithub size={30}/>
            </a>
          </div>
        </div>
        <div className="footer-right">
          <p>&copy; 2023 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

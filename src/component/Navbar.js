import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaGuitar } from 'react-icons/fa';
import '../css/Navbar.css'; // Import the CSS file
export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="left1">
          <span className="logo">Portfolio.</span>
        </div>
        <div className="center">
          <div className="circles">
          <a href="https://www.linkedin.com/in/muhammad-sheraz-ramzan/">
              <FaLinkedin size={30} color="darkgrey"/>
            </a>
          </div>
          <div className="circles">
          <a href="https://github.com/sheraz-bajwa">
              <FaGithub size={30} color="darkgrey"/>
            </a>
          </div>
        </div>
        <div className="right1">
          <button>Hire Me</button>
        </div>
      </nav>
    </div>
  );
}

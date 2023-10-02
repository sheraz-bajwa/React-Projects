import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="left1">
          <span className="logo">Your Logo</span>
        </div>
        <div className="center">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="right1">
          <button>Hire Me</button>
        </div>
      </nav>
    </div>
  );
}

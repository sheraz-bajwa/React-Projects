import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="left1">
          <span className="logo">Your Logo</span>
        </div>
        <div className="center">
          <div className="circles">
            <img
              src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png"
              class="d-block w-100"
              alt="..."
            />{" "}
          </div>
          <div className="circles">
            <img
              src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
              class="d-block w-100"
              alt="..."
            />{" "}
          </div>
        </div>
        <div className="right1">
          <button>Hire Me</button>
        </div>
      </nav>
    </div>
  );
}

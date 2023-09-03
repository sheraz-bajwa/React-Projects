import React from "react";

export default function MyComponent1() {
    const imageUrl = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
    return (
    <div>
      <div className="hell">
        <div className="circle">
          <img
            src={imageUrl}
            alt="Profile"
            className="profile-pic"
          />
        </div>
        <div className="text">
          <h1>Your Text Here</h1>
          <p>Some description or additional text goes here.</p>
          <button>Click Me</button>
        </div>
      </div>
    </div>
  );
}

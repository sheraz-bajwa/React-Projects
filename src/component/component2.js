import React from "react";
import Card from "./Card";

export default function MyComponent2() {
  return (
    <div>
      <div className="hell">
        <div className="circle">
          {/* <img
            src={imageUrl}
            alt="Profile"
            className="profile-pic"
          /> */}
        </div>
        <div className="text">
          <h1>Featured Projects</h1>
        </div>
        <div className="text">
          <p>
            Brief intro goes here. My main experience lies in the building of
            the real world. I'm currently working on donation website for BMC
            university
          </p>
        </div>
        <div className="center">
          <Card/>
        </div>
      </div>
    </div>
  );
}

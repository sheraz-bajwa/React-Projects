import React from "react";

const containerStyle = {
  width: "300px",
  height: "200px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f0f0f0",
};

const imageStyle = {
  height: "50%",
  width: "100%",
};

const textContainerStyle = {
  textAlign: "start",
  color: "#007bff",
  fontSize: "14px",
};

function MyComponent4() {
  return (
    <div className="containerStyle" style={containerStyle}>
      <img
        src="https://cdn.pixabay.com/photo/2015/05/02/08/02/angel-749625_1280.jpg" // Replace with the actual image URL
        alt="Your Image"
        style={imageStyle}
        className="imageStyle"
      />
      <div className="textContainerStyle" style={textContainerStyle}>
        <h2>Heading</h2>
        <p>
          Excited to share my latest project! Just developed a chat app using
          GPT in Flutter. 🔍💬 Say goodbye to mundane conversations - this app
          takes chatting to a whole new level!.
        </p>
      </div>
    </div>
  );
}

export default MyComponent4;

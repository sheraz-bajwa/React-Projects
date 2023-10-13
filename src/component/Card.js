import React from "react";

export default function Card() {
  const cardStyle = {
    width: "18rem",
    Height: "15rem",
    // You can add more style properties here
  };

  return (
    <div>
      <div className="card" style={cardStyle}>
        <img
          src="https://cdn.pixabay.com/photo/2015/05/02/08/02/angel-749625_1280.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

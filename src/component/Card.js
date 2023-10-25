import React from "react";
import myImage1 from "../assets/covidApp.png";
import PropTypes from "prop-types";

export default function Project(props) {
  const cardStyle = {
    width: "18rem",
  };

  return (

    <div className="card" style={cardStyle}>
      <img src={myImage1} className="card-img-top" alt="Project Image" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
         {props.description}
          {/* Some quick example text to build on the card title and make up the
          bulk of the card's content. */}
        </p>
      </div>

      <div className="card-body">
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
}

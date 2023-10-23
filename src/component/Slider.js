import React from "react";

import { useSpring, animated, config } from "react-spring";
import myImage1 from "../assets/covidApp.png";
import myImage2 from "../assets/MovieApp.png";
import myImage3 from "../assets/weatherApp.png";
import myImage4 from "../assets/NewsAPp.png";
import "../css/Slider.css"; // Import the CSS file

export default function Slider() {
  // Define a spring animation for the slide-in effect
  const slideIn = useSpring({
    from: { opacity: 0, transform: "translateX(-100%)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: config.wobbly, // You can adjust the animation config
  });
  const buttonAnimation = useSpring({
    to: { transform: "scale(1)" },
    from: { transform: "scale(0.8)" },
  });

  return (
    <div className="fullscreen">
      <animated.div style={slideIn} className="slid">
        <center>
          <h1 className="Heading">Projects</h1>
        </center>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={myImage1} className="d-block w-100" alt="Project 1" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Project 1</h5>
                <p>Description of Project 1</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={myImage2} className="d-block w-100" alt="Project 2" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Project 2</h5>
                <p>Description of Project 2</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={myImage3} className="d-block w-100" alt="Project 3" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Project 3</h5>
                <p>Description of Project 3</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <animated.span
              style={buttonAnimation}
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></animated.span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <animated.span
              style={buttonAnimation}
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></animated.span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </animated.div>
    </div>
  );
}

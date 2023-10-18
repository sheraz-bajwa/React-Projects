import React from "react";
import myImage1 from '../assets/covidApp.png';
import myImage2 from '../assets/MovieApp.png';
import myImage3 from '../assets/weatherApp.png';
import myImage4 from '../assets/NewsAPp.png';

export default function Slider() {
  return (

    <div className="slid">
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={myImage1}
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src={myImage2}
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src={myImage3}
            class="d-block w-100"
            alt="..."
          />
        </div><div class="carousel-item">
          <img
            src={myImage4}
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    </div>  );
}

import React from "react";
import "./certificate.css";

const Certification = () => {
  return (
    <section style={{ marginTop: "8rem" }}>
      <h2 style={{ fontSize: "3rem" }}>
        <i className="bi bi-award-fill"></i>Certifi<span>Cation</span>
      </h2>
      <div className="certificate">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1300"
        >
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src="img/1HC.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="8000">
                <img src="img/2CC.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="6000">
                <img src="img/3JC.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="img/4JCC.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;

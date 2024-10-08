import React from "react";
import "./work.css";

const ProjectSection = () => {
  return (
    <section className="project" id="project">
      <h2 className="gf_h2 text-dark heading">
        <i className="bi bi-briefcase-fill"></i>
        Featured<span> Work</span>
      </h2>
      <div className="project-container">
        <div
          className="project-box"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <img src="img/E-BookStore.png" alt="" />
          <div className="project-layer">
            <h4>E-BookStore</h4>
            <p></p>
            <a
              href="https://swadeshchhetri.github.io/E_BookStore/"
              className="bi bi-box-arrow-up-right"
              style={{ fontSize: "18px", textDecoration: "none" }}
            ></a>
          </div>
        </div>

        <div
          className="project-box"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <img src="img/QuickCart.png" alt=" " />
          <div className="project-layer">
            <h4>QuickCart</h4>
            <p></p>
            <a
              href="https://swadeshchhetri.github.io/QuickCart/"
              className="bi bi-box-arrow-up-right"
              style={{ fontSize: "18px", textDecoration: "none" }}
            ></a>
          </div>
        </div>

        <div
          className="project-box"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <img src="img/foodD.png" alt=" " />
          <div className="project-layer">
            <h4>Flavordash</h4>
            <p></p>
            <i
              className="bi bi-box-arrow-up-right"
              style={{ fontSize: "18px", textDecoration: "none" }}
            ></i>
          </div>
        </div>

        <div
          className="project-box"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img src="img/todo.png" alt=" " />
          <div className="project-layer">
            <h4>ToDo-list App</h4>

            <i
              className="bi bi-box-arrow-up-right"
              style={{ fontSize: "18px", textDecoration: "none" }}
            ></i>
          </div>
        </div>
        <div
          className="project-box"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img src="img/Calculator.png" alt=" " />
          <div className="project-layer">
            <h4>Calculator</h4>

            <i
              className="bi bi-box-arrow-up-right"
              style={{ fontSize: "18px", textDecoration: "none" }}
            ></i>
          </div>
        </div>
        <div
          className="project-box"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img src="img/QuizApp.png" alt=" " />
          <div className="project-layer">
            <h4>QuizApp</h4>
            <i
              className="bi bi-box-arrow-up-right"
              style={{ fontSize: "18px", textDecoration: "none" }}
            ></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

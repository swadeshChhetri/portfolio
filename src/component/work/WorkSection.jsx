import React from "react";
import "./work.css";

const ProjectSection = () => {
  return (
    <section className="project" id="project">
      <h2 className="gf_h2 text-dark heading">
        <i className="bi bi-briefcase-fill"></i>
        Featured<span>Work</span>
      </h2>
      <div className="project-container">
        <div
          className="project-box"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <img src="img/2.jpg" alt="" />
          <div className="project-layer">
            <h4>E-BookStore</h4>
            <p>
              I developed a book store web application using React and Redux.
              The application allows users to add and remove items from their
              items bag. Data is stored in a JSON file and fetched to ensure
              consistent and reliable display of book information with real-time
              price updates. React handles the UI components, while Redux
              manages the state, ensuring seamless updates to the shopping bag
              and price calculations.
            </p>
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
          <img src="img/3.jpg" alt=" " />
          <div className="project-layer">
            <h4>SnapSocial</h4>
            <p>
              I developed a single-page social media user interface using React.
              The interface allows users to like photos. React handles the
              dynamic rendering of content and the state management required for
              the like functionality.
            </p>
            <a
              href="https://swadeshchhetri.github.io/SnapSocial/"
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
          <img src="img/1.jpg" alt=" " />
          <div className="project-layer">
            <h4>Bank Mangagement System</h4>
            <p>
              I developed a bank management system as an ATM application using
              Java, Swing, and MySQL. The app features a Swing-based GUI for
              user login and transactions, including withdrawals, deposits,
              balance checks, and transfers. Java handles backend logic and
              MySQL manages user and transaction data.
            </p>
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
          <img src="img/4.jpg" alt=" " />
          <div className="project-layer">
            <h2 className="gf_h2 text-dark">MovieStore</h2>

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
          <img src="img/5.jpg" alt=" " />
          <div className="project-layer">
            <h4>FashionMart</h4>

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
          <img src="img/6.jpg" alt=" " />
          <div className="project-layer">
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

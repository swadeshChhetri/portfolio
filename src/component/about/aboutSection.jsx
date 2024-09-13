import React from "react";
import "./about.css";
import { Link } from "react-scroll";

const AboutSection = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="about-container">
          <div
            className="img-container"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img src="img/profile.JPG" className="img-cont" alt="" />
          </div>
          <div
            className="about-me"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h2 className="gf_h2 text-dark heading">
              <i className="bi bi-person-fill-check"></i>
              ABOUT<span>Me</span>
            </h2>
            <p>
              My name is Swadesh Chhetri, and I am currently residing in
              Yeshwantpur. I hold a Bachelor's degree in Literature with honors,
              where I secured the second position in my college. I am skilled in
              HTML, CSS, JavaScript, Bootstrap, React + Redux, Java, and Git for
              version control. I have also earned certifications in Java and
              coding from a computer training center, and in HTML, CSS, and
              JavaScript from Infosys Springboard. I have successfully completed
              three major projects: a Bank Management System, an E-book Store,
              and a Social Media UI. <br />
              My strong technical foundation and hands-on experience have
              prepared me well to contribute effectively as a web developer. I
              am confident in my ability to meet project expectations and am
              excited about the opportunity to join IT companies.
            </p>
            <Link to="#" className="btnn">
              Read More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;

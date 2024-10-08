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
              <h3><strong>Hi, I'm Swadesh</strong></h3> <h3 style={{marginBottom:'15px'}}><strong>Frontend Developer | Bengaluru, India</strong></h3>I specialize
              in creating responsive and dynamic web applications using a range
              of technologies including <strong> HTML, CSS, JavaScript, Bootstrap, React,
              Redux, Java,</strong> and <b> Git</b> for version control. I'm passionate about
              continuously improving my coding skills and developing modern,
              user-friendly websites. With a strong focus on front-end
              development, I take pride in building visually appealing and
              functional web applications. I’m confident in my ability to meet
              project goals and am eager to contribute to innovative IT
              companies.
            </p>
            <a  className="btnn" href="https://drive.google.com/file/d/1U9qOeWDVS3J1uPXoeDO80cJ3yVYBRNfj/view?usp=drive_link">Resume</a>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;

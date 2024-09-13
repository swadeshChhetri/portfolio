import React, { useEffect, useRef } from "react";
import "./home.css";
import AnimatedBackground from "../../AnimatedBackground";
import Typed from "typed.js";
import { Link } from "react-scroll";

const HomeSection = () => {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: ["Web Designer", "Front-End Developer", "React Developer"],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  });
  return (
    <>
    <AnimatedBackground >
      <section className="home" id="home">
        <div className="home-content">
          <img
            src="img/AProfile.jpg"
            alt="profile image"
            className="home-img"
          />
          <h3>Hi,Myself</h3>

          <h1>Swadesh Chhetri</h1>

          <div className="image-container">
            <h3>
              And I'm a <span className="multiple-text"></span>
            </h3>
          </div>
          <div className="social-media">
            <a href="https://www.facebook.com/swadesh.chhetri.1/">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://www.instagram.com/swadesh.85/">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/swadesh85/">
              <i className="bi bi-linkedin color"></i>
            </a>
            <a href="">
              <i className="bi bi-github"></i>
            </a>
            <a href="">
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/1U9qOeWDVS3J1uPXoeDO80cJ3yVYBRNfj/view?usp=drive_link"
            download
            className="btnn"
          >
            <i className="bi bi-arrow-down-circle"></i> Dowload CV
          </a>
          <Link to="contact" className="btnn" offset={-30} duration={1500}>
            <i className="bi bi-briefcase"></i> Hire Me
          </Link>
        </div>
      </section>
      </AnimatedBackground>
    </>
  );
};

export default HomeSection;

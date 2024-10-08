import React, { useEffect, useRef } from "react";
import "./home.css";
import AnimatedBackground from "../../AnimatedBackground";
import Typed from "typed.js";
import { Link } from "react-scroll";

const HomeSection = () => {
  const typedElement = useRef(null);
  useEffect(() => {
    const options = {
      strings: [ "Dynamic Web Creations", "Front-End Developer",  "Responsive Web Designer"],
      typeSpeed: 40,
      backSpeed: 15,
      backDelay: 1000,
      loop: true,
    };
      const typed = new Typed(typedElement.current, options);
    
    return () => {
      typed.destroy();
    };
  },[]);
  return (
    <>
    <AnimatedBackground >
      <section className="home" id="home">
        <div className="home-content">
          <img
            src="img/Profile.gif"
            alt="profile image"
            className="home-img"
          />
          <h3>Hi, I'M</h3>

          <h1>Swadesh Chhetri</h1>

          <div className="image-container">
            <h3>
              And I'm a <span ref={typedElement}></span>
            </h3>
          </div>
          <div className="social-media">
            <a href="https://www.facebook.com/swadesh.chhetri.1/">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/swadesh.85/">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/swadesh85/">
              <i className="bi bi-linkedin color"></i>
            </a>
            <a href="https://github.com/swadeshChhetri">
              <i className="bi bi-github"></i>
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

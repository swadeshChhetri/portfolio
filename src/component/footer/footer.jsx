import React from "react";
import "./footer.css";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="footer">
      <section>
        <div className="footer">
          <div className="about">
          <h1>
            <i className="bi bi-person-fill-check"></i>Swadesh's Portfolio
          </h1>
          <p>
            Thank you for visiting my personal website. <br /> Connect with me over
            socials.
          </p>
          <br />
          <p>Keep Rising. Connect with me over live chat!</p>
          </div>
          <div className="quick">
            <h1>Quick Links</h1>
            <Link to="home">
              <i className="bi bi-arrow-right-square-fill"></i>
              Home
            </Link>
            <Link to="about">
              <i className="bi bi-arrow-right-square-fill"></i>
              About
            </Link>
            <Link to="expertises">
              <i className="bi bi-arrow-right-square-fill"></i>
              Skills
            </Link>
            <Link to="project">
              <i className="bi bi-arrow-right-square-fill"></i>
              Work
            </Link>
            <Link to="certification">
              <i className="bi bi-arrow-right-square-fill"></i>
              Certification
            </Link>
          </div>
          <div className="contact">
            <h1>Contact Info</h1>
            <h4>
              <i className="bi bi-telephone-outbound-fill"></i>+ 91 XXX-XXX-XXXX
            </h4>
            <h4>
              <i className="bi bi-envelope-plus-fill"></i>
              swadeshchhetri65@gmail.com
            </h4>
            <h4>
              <i className="bi bi-geo-alt-fill"></i>Bengaluru, India-560022
            </h4>
          </div>
          </div>
          <div className="Social">
            <a href="">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="">
              <i className="bi bi-github"></i>
            </a>
            <a href="">
              <i className="bi bi-envelope-plus-fill"></i>
            </a>
            <a href="">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="">
              <i className="bi bi-telegram"></i>
            </a>
          </div>
          <hr />
          <p>Designed with 💌 By Swadesh Chhetri</p>
      
      </section>
    </div>
  );
};

export default Footer;

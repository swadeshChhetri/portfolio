import React, { useRef } from "react";
import "./header.css";
import { Link } from "react-scroll";
// import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle"

const HeaderSection = () => {


  const offcanvasRef = useRef(null);

  const closeOffcanvas = () => {
    const offcanvasElement = offcanvasRef.current;
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
    // bsOffcanvas.hide();
    if (bsOffcanvas && bsOffcanvas._isShown) {
      bsOffcanvas.hide();
    }
  };

  return (
    <nav className="navbar bg-c navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link to="home" className="logo">
          <img src="img/port.jpg" alt="portfolio.logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          ref={offcanvasRef}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Portfolio
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className=" navbar justify-content-end flex-grow-1 pe-3">
              <li className="nav_item">
                <Link
                  activeClass="active"
                  aria-current="page"
                  className="nav-link max-lg-2 "
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={450}
                  onClick={closeOffcanvas}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link max-lg-2"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={450}
                  onClick={closeOffcanvas}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link max-lg-2"
                  to="expertises"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={450}
                  onClick={closeOffcanvas}
                >
                  Expertise
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link "
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={450}
                  onClick={closeOffcanvas}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link "
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={450}
                  onClick={closeOffcanvas}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderSection;

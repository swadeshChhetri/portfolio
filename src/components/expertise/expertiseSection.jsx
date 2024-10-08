import React from "react";
import "./expertise.css";

const ExpertiseSection = () => {
  return (
    <section className="expertises" id="expertises">
      <h2 className="gf_h2 text-dark heading">
      <i className="bi bi-laptop"></i>
        Skill<span> Expertise</span>
      </h2>
      <div className="expertises-container">
        <div
          className="expertise-box"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />

          <i className="fa-solid fa-code"></i>
        </div>
        <div
          className="expertise-box"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
        </div>
        <div
          className="expertise-box"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />

          <i className="fa-solid fa-android"></i>
        </div>
        <div
          className="expertise-box"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
          <i className="fa-solid fa-android"></i>
        </div>
        <div
          className="expertise-box"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original-wordmark.svg" />

          <i className="fa-solid fa-palette"></i>
        </div>
        <div
          className="expertise-box"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />

          <i className="fa-solid fa-palette"></i>
        </div>

        <div
          className="expertise-box"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" />
          <i className="fa-solid fa-android"></i>
        </div>

        <div
   className="expertise-box"
   data-aos="flip-left"
   data-aos-duration="1500"
 >
  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
          
   <i className="fa-solid fa-android"></i>
 </div>


        <div
          className="expertise-box"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" />

          <i className="fa-solid fa-palette"></i>
        </div>
        <div
          className="expertise-box"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" />

          <i className="fa-solid fa-palette"></i>
        </div>
        <div
          className="expertise-box"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />

          <i className="fa-solid fa-palette"></i>
        </div>
        <div
          className="expertise-box"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" />

          <i className="fa-solid fa-palette"></i>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;

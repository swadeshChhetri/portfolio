import React from "react";
import "./expertise.css";

const ExpertiseSection = () => {
  return (
    <section className="expertises" id="expertises">
      <h2 className="gf_h2 text-dark heading">
        <i className="bi bi-stars"></i>
        Skill<span>Expertise</span>
      </h2>
      <div className="expertises-container">
        <div
          className="expertise-box"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img src="SkillLogo/html.jpg" alt="" />
          <i className="fa-solid fa-code"></i>
          <div className="expertise-layer">
            <h3>HTML</h3>
            <p>
              1. Element and Tags <br />
              2. Links and Navigationbr <br />
              3. Tables <br />
              4. Forms and Input <br />
              5. HTML5
            </p>
          </div>
        </div>
        <div
          className="expertise-box"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <img src="SkillLogo/css.jpg" alt="" />
          <div className="expertise-layer">
            <h3>CSS</h3>
            <p>
              1. Selector and Properties <br />
              2. TextStyling <br />
              3. BoxModel <br />
              4. Layout <br />
              5. Styling(Links and List) <br />
              6. Backgrounds and Borders <br />
              7. Transitions and Animations <br />
            </p>
          </div>
        </div>
        <div
          className="expertise-box"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <img src="SkillLogo/javascript.jpg" alt="" />
          <i className="fa-solid fa-android"></i>
          <div className="expertise-layer">
            <h3>JavaScript</h3>
            <p>
              1. Variable and DataTypes <br />
              2. Operators and Expressions <br />
              3. Control Flow <br />
              4. Function <br />
              5. Array and Object <br />
              6. Document Object Model <br />
              7. ES6 Features+ <br />
              8. Event and Event Handling <br />
              9. Forms and Form Validation <br />
              10. API and Fetch <br />
              11. Error Handling and Debuging <br />
            </p>
          </div>
        </div>
        <div
          className="expertise-box"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <img src="SkillLogo/boot.jpg" alt="" />
          <i className="fa-solid fa-android"></i>
          <div className="expertise-layer">
            <h3>Bootstrap</h3>
            <p>
              1. Grid System <br />
              2. Bootstrap Components <br />
              3. Bootstrap Utilities <br />
              4. Customization <br />
              5. Responsive Design Techniques <br />
            </p>
          </div>
        </div>
        <div
          className="expertise-box"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <img src="SkillLogo/react-redux.jpg" alt="" />
          <i className="fa-solid fa-android"></i>
          <div className="expertise-layer">
            <h3>React</h3>
            <p>
              1. Components & Props <br />
              2. StateManagement & EventsHandling <br />
              3. Conditional Rendering <br />
              4. Forms & Controlled Components <br />
              5. Lifting State Up <br />
              6. Composition & Inheritance <br />
              7. React Hooks & Context API <br />
              8. React Router <br />
              9. Setting up React and Redux <br />
              10. Actions & Action Creators <br />
              11. Reducers & Redux Store <br />
              12. React Components to Redux
            </p>
          </div>
        </div>
        <div
          className="expertise-box"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <img src="SkillLogo/java.jpg" alt="" />
          <i className="fa-solid fa-palette"></i>
          <div className="expertise-layer">
            <h3> Java </h3>
            <p>
              1. Data types and Variables <br />
              2. Control flow Statements <br />
              3. Methods and Arrays <br />
              4. Object-Oriented Programming(OOP) <br />
              5. Exception Handling <br />
              6. JDBC and Database Connectivity <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;

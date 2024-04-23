import React from "react";
import "./About.css";
import blackbg from "../../assets/blackbg.jpg";
import profilepicture from "../../assets/profilepicture.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        {/* <img src={blackbg} alt="" srcset="" /> */}
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profilepicture} alt="" srcset="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              eum quibusdam nihil.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              corporis omnis dolorum error, accusantium neque fugiat quia
              dolorem. Velit, architecto?
            </p>
          </div>
          <div className="about-skill">
            <div className="about-skills">
              <p>HTML & CSS</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skills">
              <p>Javascript</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skills">
              <p>React JS</p> <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE </p>
        </div>
        <hr />

        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED </p>
        </div>
        <hr />

        <div className="about-achievement">
          <h1>20+</h1>
          <p>HAPPY CLIENTS </p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;

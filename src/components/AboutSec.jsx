import React from "react";
import "../style.css";
import "../App.css";
import data from "../Data/data.json";

function AboutSec() {
  const About = data.about;
  const Mail = data.col1.email;

  return (
    <>
      <div className="container-fluid displaySetting3 bgDark">
        <div className="row">
          <div className="xl-col-12 md-col-6">
            <div className="introHead lblue mont">About</div>
            <div className="mirror">ABOUT</div>
            <div className="introP16 azure nextLine comfortaa justify">
              {About.headDetails}
              <span className="verdigris">{About.techDetails}</span>
              {About.headDetails2}
            </div>
            <div className="introP14 azure nextLine comfortaa justify">
              {About.mainDetails}
            </div>
            <div className="button-about">
              <a
                href={"pdf/resume_Anushka.pdf"}
                download="AnushkaBajpai_resume"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button-hire">Download CV</button>
              </a>
              <br />
              <a href={`mailto:${Mail}`}>
                <button className="button-hire">Contact Me!</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSec;

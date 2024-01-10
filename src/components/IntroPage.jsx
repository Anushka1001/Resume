import React from "react";
import data from "../Data/data.json";
import "../style.css";

function IntroPage() {
  const Intro = data.col2.intro;
  const Name = data.col1;

  return (
    <>
      <div className="container-fluid displaySetting2">
        <div className="row">
          <div className="col-xl-7">
            <h4 className="introH4 comfortaa">{Intro.heading}</h4>
            <h2 className="introH2 mont royalBlue head">
              {Name.firstname}
              <br />
              {Name.lastname}
            </h2>
            <p className="introH5 dBlue">{Intro.desc}</p>
            <div className="links poppins">
              <a
                href="https://www.linkedin.com/in/anushkabajpai1006/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
              <a
                href="https://github.com/Anushka1001/"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a href="pdf/resume_Anushka.pdf" download="resume_Anushka">
                Resume
              </a>
            </div>
          </div>
          <div className="col-xl-5 intro_image">
            <img
              src="images/bluecol.png"
              className="intro_image userSelect"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroPage;

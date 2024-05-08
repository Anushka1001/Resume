import React from "react";
import data from "../Data/data.json";
import "../style.css";

function IntroPage() {
  const Intro = data.col2.intro;
  const Name = data.col1;

  return (

        <div className="d-flex flex-direction-column">
            <div className="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12">
                <div className="introH4 comfortaa">{Intro.heading}</div>
                <div className="introH2 mont royalBlue head">
                  {Name.firstname}
                  <br />
                  {Name.lastname}
                </div>
                <p className="introH5 dBlue max-width-styled">{Intro.desc}</p>
                <div className="links poppins row my-2 mx-0">
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
                    <a href="pdf/AnushkaBajpai.pdf" download="resume_AnushkaBajpai">
                      Resume
                    </a>
                    <a
                      href="https://drive.google.com/drive/folders/1wEM1HfoKpiMy_rPRo9Wyh8hD5OW3AoE8?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Certificates
                    </a>
                </div>
            </div>
            <div className="col-xxl-5 col-xl-5 intro_image userSelect">
            </div>
        </div>
  );
}

export default IntroPage;

import React from "react";

function Projects() {
  const openAstralio = () => {
    window.open("https://astralio.web.app/", "_blank");
  };
  const openColorGenerator = () => {
    window.open("https://colorgenerator1.vercel.app/", "_blank");
  };
  const openEcom = () => {
    window.open("https://colorgenerator1.vercel.app/", "_blank");
  };

  return (
    <div className="bgDark">
      <div className="introHead lblue mont">Projects</div>
      <div className="mirror">Projects</div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4">
            <div onClick={openAstralio} className="projectName comfortaa">
              Astralio
            </div>
          </div>
          <div className="col-xl-4">
            <div onClick={openEcom} className="projectName comfortaa">
              Upcoming E-com website
            </div>
          </div>
          <div className="col-xl-4">
            <div onClick={openColorGenerator} className="projectName comfortaa">
              Random Color Generator
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

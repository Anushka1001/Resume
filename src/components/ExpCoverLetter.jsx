import React from "react";
import data from "../Data/data.json";
import Experience from "./Experience/Experience";

function ExpCoverLetter() {
  return (
    <div className="container-fluid displaySetting4 bgDark">
      <div className="row">
        <div className="col-xl-6">
          <div className="introHeadSmall dBlue mont">Experience</div>
          <Experience />
        </div>
        <div className="col-xl-6 bgImage">
          <div className="introHeadSmall dBlue mont">Cover Letter</div>
          <div className="introP14 azure nextLine comfortaa justify">
            {data.experiencePage.coverLetter}
            <br />
            <img
              src="images/sign.png"
              className="signature userSelect"
              alt="Signature"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpCoverLetter;

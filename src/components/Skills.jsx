import React from "react";
import "../style.css";
import "../App.css";
import data from "../Data/data.json";

function Skills() {
  return (
    <div className="bgDark">
      <div className="introHead lblue mont">Skills</div>
      <div className="mirror">SKILLS</div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {Object.keys(data.skill1).map((key, index) => (
              <div key={index} className="container">
                <div className="introP14 azure ">{key}</div>
                <div className="row skillRow">
                  <div className="col-10">
                    <div
                      class="progress progressBars"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ height: "6px" }}
                    >
                      <div
                        class="progress-bar progress-bar-striped"
                        style={{ width: data.skill1[key] }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-2 skillValue azure">
                    {data.skill1[key]}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-6">
            {Object.keys(data.skill2).map((key, index) => (
              <div key={index}>
                <div className="introP14 azure">{key}</div>
                <div className="row skillRow">
                  <div className="col-10">
                    <div
                      class="progress progressBars"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ height: "6px" }}
                    >
                      <div
                        class="progress-bar progress-bar-striped"
                        style={{ width: data.skill2[key] }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-2 skillValue azure ">
                    {data.skill2[key]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

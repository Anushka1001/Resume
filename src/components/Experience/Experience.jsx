import React from "react";
import "./Experience.css";
import data from "../../Data/data.json";

function Experience() {
  const Experience = data.experiencePage.experience;
  return (
    <>
      <ul className="timelineContainer">
        {Object.keys(Experience).map((key, index) => (
          <li className="timelineList" key={index}>
            <span class="timelineCircle"></span>
            <div className="timelineList-content">{key}</div>
            <div className="timelineYear">{Experience[key]}</div>
          </li>
        ))}
        <li className="timelineList">
          <span class="timelineCircle"></span>
        </li>
      </ul>
    </>
  );
}

export default Experience;

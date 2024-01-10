import React from "react";
import "../style.css";
import data from "../Data/data.json";

function sidePanel() {
  return (
    <>
      <img src="images/bluelogo.png" className="logo userSelect" alt="logo" />
      <div className="smoke positionBlock">
        {Object.keys(data.col1).map((key, index) => (
          <div key={index}>
            <div className="col1Heading poppins tan">{key}</div>
            <div className="col1Value comfortaa lightGray">
              {data.col1[key]}
            </div>
          </div>
        ))}
        <img
          src="images/sign.png"
          className="signature userSelect"
          alt="Signature"
        />
      </div>
    </>
  );
}

export default sidePanel;

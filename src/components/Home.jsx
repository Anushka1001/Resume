import React from "react";
import IntroPage from "./IntroPage";
import AboutSec from "./AboutSec";
import ExpCoverLetter from "./ExpCoverLetter";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <IntroPage />
      <AboutSec />
      <ExpCoverLetter />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;

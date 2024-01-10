import React from "react";

function Contact() {
  const openGithub = () => {
    window.open("https://github.com/Anushka1001", "_blank");
  };
  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/anushkabajpai1006/", "_blank");
  };
  return (
    <div className="bgDark">
      <div className="introHead lblue mont">Contact</div>
      <div className="mirror">contact</div>
      <div className="Icons">
        <img
          src="images/github.svg"
          className="contactIcons"
          alt="Github"
          onClick={openGithub}
        />
        <img
          src="images/linkedin.svg"
          className="contactIcons"
          alt="LinkedIn"
          onClick={openLinkedin}
        />
        <img
          src="images/envelope-at.svg"
          className="contactIcons"
          alt="Mail"
          onClick={() =>
            (window.location = "mailto:anushka.bajpai1006@gmail.com")
          }
        />
      </div>
      <div className="introP14 lightGray userSelect copyright poppins">
        &copy; Anushka Bajpai &#124; 2024
      </div>
    </div>
  );
}

export default Contact;

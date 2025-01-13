import React from "react";
import CV from "../../assets/Suraj Maurya.pdf";
import "./header.css";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download="Suraj Maurya.pdf" className="btn" aria-label="Download my resume">
        <span>📄</span> Download CV
      </a>
      <a href="#contact" className="btn btn-primary" aria-label="Contact me">
        <span>💬</span> Let's Talk
      </a>
    </div>
  );
};

export default CTA;

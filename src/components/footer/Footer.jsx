import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Suraj Maurya
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/sooraj-mourya/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/Samrat-Suraj" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Suraj Maurya {currentYear}. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;

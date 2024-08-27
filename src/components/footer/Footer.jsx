import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="footer__socials">
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/matiyev/">
          <BsLinkedin />
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/matiyev">
          <FaGithub />
        </a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/thetovarisch">
          <BsTwitterX/>
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Muhammet Matiyev. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="footer__socials">
        <a target="_blank" href="https://www.linkedin.com/in/matiyev/">
          <BsLinkedin />
        </a>
        <a target="_blank" href="https://github.com/matiyev">
          <FaGithub />
        </a>
        <a target="_blank" href="https://www.youtube.com/@SentinelWatch">
          <BsYoutube />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Muhammet Matiyev. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;

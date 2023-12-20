import React, { useEffect } from "react";
import "./header.css";
import CTA from "./CTA";

const Header = () => {
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    const handleMouseOver = (event) => {
      let iteration = 0;
      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 10);
    };

    const h1Element = document.querySelector("h1");
    h1Element.addEventListener("mouseover", handleMouseOver);

    return () => {
      h1Element.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <header>
      <div className="container header__container">
        <h1 data-value="MUHAMMET MATIYEV">MUHAMMET MATIYEV</h1>
        <h5 className="text-light">Cybersecurity Technician | Web Developer | Chemical Engineer</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;

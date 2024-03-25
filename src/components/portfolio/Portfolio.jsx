import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/MoodSnap.jpeg";
import IMG2 from "../../assets/soc.jpg";
import IMG3 from "../../assets/homelab.jpeg";
import IMG4 from "../../assets/security-onion.jpeg";
import IMG5 from "../../assets/nmap.jpg";
import IMG6 from "../../assets/wireshark.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "MoodSnap | Mood Detection",
    github: "https://github.com/matiyev/MoodSnap",
    demo: "https://moodsnap.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "SOC-MOCK",
    github: "https://github.com/matiyev/soc-mock"
  },
  {
    id: 3,
    image: IMG3,
    title: "The Security Playground",
    github: "https://github.com/matiyev/security-playground"
  },
  {
    id: 4,
    image: IMG4,
    title: "PCAP investigation | Security Onion",
    github: "https://github.com/matiyev/pcap-investigation"
  },
  {
    id: 5,
    image: IMG5,
    title: "Network Troubleshooting | Nmap & hping3",
    github: "https://github.com/matiyev/network-troubleshooting"
  },
  {
    id: 5,
    image: IMG6,
    title: "Intercepting & Analyzing Network Traffic | Wireshark & tcpdump",
    github: "https://github.com/matiyev/network-traffic-analysis"
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                {id === 1 && (
                  <a href={demo} className="btn btn-primary">
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

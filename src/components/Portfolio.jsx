import React, { useEffect } from "react";
import "./Portfolio.css";
import landingImg from "../assets/projects/landing.jpeg";
import ecommerceImg from "../assets/projects/landing1.jpeg";
import portfolioImg from "../assets/projects/landing2.jpeg";
import cafeImg from "../assets/projects/landing3.jpeg";

const projects = [
  {
    title: "Basic Landing Page",
    description: "A responsive and modern landing page.",
    image: landingImg,
    link: "https://manishavaraganti.github.io/basiclandingpage/"
  },
  {
    title: "E-commerce Project",
    description: "Full-featured e-commerce website with cart and checkout.",
    image: ecommerceImg,
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase my skills and projects.",
    image: portfolioImg,
    link: "#"
  },
  {
    title: "Custom Website",
    description: "Custom website with client requirements",
    image: cafeImg,
    link: "#"
  },
];


const Portfolio = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".portfolio-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="portfolio-title">My Projects</h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="portfolio-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="portfolio-btn"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

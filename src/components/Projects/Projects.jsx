import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import "./Projects.css";
import portfolioIMG from "../../assets/portfolio-img.png";
import formIMG from "../../assets/form-img.png";
import calcIMG from "../../assets/calc-img.png";
import testimonalIMG from "../../assets/testimonal-img.jpg";
import socialproofIMG from "../../assets/socialproof-img.jpg";
import productpreviewIMG from "../../assets/productpreview-img.jpg";
import cryptoappIMG from "../../assets/cryptoapp-img.png";
import essenceIMG from "../../assets/essence-img.png";

const Projects = () => {

  const initialProjectData = [
    {
      imageSrc: cryptoappIMG,
      stack: "React | Redux | Ant Design | Chart.js",
      githubUrl: "https://github.com/G-Loganathan/CryptoApp",
      title: "CryptoApp",
      liveUrl: "https://my-cryptocurrencyapp.netlify.app/"
    },
    {
      imageSrc: essenceIMG,
      stack: "Node Js | Express Js | MongoDB | Mongoose | React | Redux",
      githubUrl: "https://github.com/G-Loganathan/ESSENCE-An-Ecommerce-ClothingApp",
      title: "Essence - An Ecommerce Clothing App",
      liveUrl: "https://essenceclothingapp.netlify.app/"
    },
    {
      imageSrc: portfolioIMG,
      stack: "React",
      githubUrl: "https://github.com/G-Loganathan/Portfolio",
      title: "Personal Portfolio",
      liveUrl: "", 
    },
    {
      imageSrc: formIMG,
      stack: "HTML | CSS | JavaScript",
      githubUrl: "https://github.com/G-Loganathan/Form-Validation",
      title: "Form Validation",
      liveUrl: "https://g-loganathan.github.io/Form-Validation/",
    },
    {
      imageSrc: calcIMG,
      stack: "HTML | CSS | JavaScript",
      githubUrl: "https://github.com/G-Loganathan/Calculator",
      title: "Calculator",
      liveUrl: "https://g-loganathan.github.io/Calculator/",
    },
    {
      imageSrc: testimonalIMG,
      stack: "HTML | CSS",
      githubUrl: "https://github.com/G-Loganathan/Testimonal-grid-section",
      title: "Testimonal Grid Section",
      liveUrl: "https://g-loganathan.github.io/Testimonal-grid-section/",
    },
    {
      imageSrc: socialproofIMG,
      stack: "HTML | CSS",
      githubUrl: "https://github.com/G-Loganathan/Social-proof-section",
      title: "Social Proof Section",
      liveUrl: "https://g-loganathan.github.io/Social-proof-section/",
    },
    {
      imageSrc: productpreviewIMG,
      stack: "HTML | CSS",
      githubUrl: "https://github.com/G-Loganathan/Product-preview-card-component",
      title: "Product Preview Card",
      liveUrl: "https://g-loganathan.github.io/Product-preview-card-component/",
    }
  ];


  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [showViewMore, setShowViewMore] = useState(true);

  useEffect(() => {
    setDisplayedProjects(initialProjectData.slice(0, 6));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleViewMore = () => {
    setDisplayedProjects(initialProjectData.slice(0, displayedProjects.length + 3)); 
    if (displayedProjects.length + 3 >= initialProjectData.length) {
      setShowViewMore(false);
    }
  };

  return (
    <Element name="projects">
      <div className="projects__container">
        <div className="projects__header">
          <div className="projects-title">
            <p>PROJECTS</p>
          </div>
          <div className="projects-sub-heading">
            <p>Check Out Some of My Works.</p>
          </div>
          <div className="projects-sub-description">
            <p>
              Crafting seamless digital experiences through innovative web
              development and captivating web design.
            </p>
          </div>
        </div>
        <div className="projects__contentbody">
          {displayedProjects.map((project, index) => (
            <div key={index} className="card">
              <div className="img-card">
                <img src={project.imageSrc} alt="" />
              </div>
              <div className="footer-card">
                <div className="footer-1">
                  <p className="stack">{project.stack}</p>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <i className="icon fa-brands fa-github"></i>
                  </a>
                </div>
                <div className="footer-2">
                  <p className="project-title">{project.title}</p>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <i className="icon fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {showViewMore && (
          <div className="view-more-btn">
            <button onClick={handleViewMore}>View More</button>
          </div>
        )}
      </div>
    </Element>
  );
};

export default Projects;



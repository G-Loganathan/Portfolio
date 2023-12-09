import React from 'react';
import { Element } from 'react-scroll';
import "./Projects.css"
import PortfolioBg from "../../assets/portfolio-card-img.jpg"
import portfolioIMG from "../../assets/portfolio-img.png";
import formIMG from "../../assets/form-img.png";
import calcIMG from "../../assets/calc-img.png";
import testimonalIMG from "../../assets/testimonal-img.jpg";
import socialproofIMG from "../../assets/socialproof-img.jpg";
import productpreviewIMG from "../../assets/productpreview-img.jpg";

const Projects = () => {

  
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
                    <p>Crafting seamless digital experiences through innovative web development and captivating web design</p>
                      
                </div>
           </div>

           {/* <div className="filter__container">
              <button className="filter-btn">All</button>
              <button className="filter-btn">Web Development</button>
              <button className="filter-btn">UI Design</button>
           </div> */}

           <div className="projects__contentbody">

            {/* Card 1 */}

            <div className="card">

                <div className="img-card">
                  <img src={portfolioIMG} alt="" />
                </div>
                

                <div className="footer-card">
                  <div className="footer-1">
                    <p className="stack">React</p>
                    <a href="https://github.com/G-Loganathan/Portfolio" target='blank'><i className="icon fa-brands fa-github"></i></a>
                  </div>
                  <div className="footer-2">
                    <p className="project-title">Personal Porfolio</p>
                    <i className="icon fa-solid fa-arrow-up-right-from-square"></i>
                  </div>
                </div>

            </div>

            {/* Card 2 */}

            <div className="card">

                <div className="img-card">
                  <img src={formIMG} alt="" />
                </div>

                <div className="footer-card">
                  <div className="footer-1">
                    <p className="stack">HTML | CSS | JavaScript</p>
                    <a href="https://github.com/G-Loganathan/Form-Validation" target='blank'><i className="icon fa-brands fa-github"></i></a>
                  </div>
                  <div className="footer-2">
                    <p className="project-title">Form Validation</p>
                    <a href="https://g-loganathan.github.io/Form-Validation/" target='blank'> <i className="icon fa-solid fa-arrow-up-right-from-square"></i></a>
                  </div>
                </div>

            </div>

            {/* Card 3 */}

            <div className="card">

                <div className="img-card">
                  <img src={calcIMG} alt="" />
                </div>
                

                <div className="footer-card">
                  <div className="footer-1">
                    <p className="stack">HTML | CSS | JavaScript</p>
                    <i className="icon fa-brands fa-github"></i>
                  </div>
                  <div className="footer-2">
                    <p className="project-title">Calculator</p>
                    <i className="icon fa-solid fa-arrow-up-right-from-square"></i>
                  </div>
                </div>

            </div>

            {/* Card 4 */}

            <div className="card">

                <div className="img-card">
                  <img src={testimonalIMG} alt="" />
                </div>

                 <div className="footer-card">
                   <div className="footer-1">
                      <p className="stack">HTML | CSS</p>
                      <a href="https://github.com/G-Loganathan/Testimonal-grid-section" target='blank'><i className="icon fa-brands fa-github"></i></a>
                   </div>
                   <div className="footer-2">
                    <p className="project-title">Testimonal Grid Section</p>
                    <a href="https://g-loganathan.github.io/Testimonal-grid-section/" target='blank'><i className="icon fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                 </div>

                </div>

                {/* Card 5 */}

                <div className="card">

                <div className="img-card">
                  <img src={socialproofIMG} alt="" />
                </div>

                 <div className="footer-card">
                   <div className="footer-1">
                      <p className="stack">HTML | CSS</p>
                      <a href="https://github.com/G-Loganathan/Social-proof-section" target='blank'><i className="icon fa-brands fa-github"></i></a>
                   </div>
                   <div className="footer-2">
                    <p className="project-title">Social Proof Section</p>
                    <a href="https://g-loganathan.github.io/Social-proof-section/" target='blank'><i className="icon fa-solid fa-arrow-up-right-from-square"></i></a>
                    
                    </div>
                 </div>

                </div>

                {/* Card 6 */}

                <div className="card">

                <div className="img-card">
                  <img src={productpreviewIMG} alt="" />
                </div>

                 <div className="footer-card">
                   <div className="footer-1">
                      <p className="stack">HTML | CSS</p>
                      <a href="https://github.com/G-Loganathan/Product-preview-card-component" target='blank'><i className="icon fa-brands fa-github"></i></a>
                   </div>
                   <div className="footer-2">
                    <p className="project-title">Product Preview Card</p>
                    <a href="https://g-loganathan.github.io/Product-preview-card-component/" target='blank'><i className="icon fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                 </div>

                </div>

                {/* card 7 */}


           </div>

           <div>

           </div>

       </div>

    </Element>
  )
}

export default Projects
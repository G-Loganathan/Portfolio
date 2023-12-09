import React from 'react'
import "../Home/Home.css"
import { Element } from "react-scroll"

const Home = () => {


  return (
    <Element name="home" className="home__scrollElement">
      <div className='home__container'>

        <div className='home__content'>

          <div className="welcome-text-div">
            <p className='welcome-text'>Hello, World.</p>
          </div>
          <div className="my-name-div">
              <p className="my-name">I'M LOGANATHAN</p>
          </div>
          <div className="job-title">
              <p>FRONTEND DEVELOPER</p>
          </div>

          <div className="icons-group-home">
            <a href="https://www.linkedin.com/in/loganathan-g" target="blank"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/G-Loganathan" target="blank"><i className="fa-brands fa-github"></i></a>
            <a href="https://instagram.com/logannx._?igshid=MTNiYzNiMzkwZA==" target="blank"><i className="fa-brands fa-instagram"></i></a>
          </div>

          <div className="scroll__content">
            <Element to="about" className="scroll-text">Scroll Down</Element>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          

        </div>

                      
      </div>
    </Element>
  );
}

export default Home;
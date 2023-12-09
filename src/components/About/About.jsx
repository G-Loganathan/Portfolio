import React from 'react';
import { Element } from "react-scroll";
import "./About.css"
import EduIcon from "../../assets/graduate-cap-icon.jpg"

const About = () => {
  return (
    <Element name="about" className="about__scrollContainer">

    <div className="about__container">

        <div className="about__header">
          <div className="about-title">
            <p>ABOUT</p>
          </div>

          {/* <div className="line-div">
            <hr className="line" />
          </div> */}

          <div className="sub-heading">
            <p>Let me introduce myself.</p>
          </div>
          <div className='sub-description'>
            <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
          </div>
        </div>

        <div className="about__contentbody">

          <div className="content__left">
            <div className="summary-heading">
              <h1>PROFILE</h1>
            </div>
            <div className='summary-description'>
              <p>As a Frontend Developer, I dedicated to crafting seamless user experiences through captivating design. Committed to staying abreast of industry trends and delivering innovative solutions. Eager to contribute creative expertise to dynamic web development projects.</p>
            </div>
            
            <div className="data-grp-media">

            <div >
              <p className="heading-group">NAME:</p>
              <p className="data-group">Loganathan G</p>
            </div>
            <div>
              <p className="heading-group">EMAIL:</p>
              <p className="data-group">loganathan2624@gmail.com</p>
            </div>
            <div className="phone__data">
              <p className="heading-group">PHONE:</p>
              <p className="data-group">7904497010</p>
            </div>
            <div>
              <p className="heading-group">LOCATION:</p>
              <p className="data-group">Chennai, Tamil Nadu</p>
            </div>
            </div>
            
          </div>
              
          <div className="content__right">

            <div className="education__heading">
              <h1>EDUCATION</h1>
            </div>

            <div className='education__box'>
              <div className='horizontal-line'>
               <img src={EduIcon} alt="" />
              </div>
              <div className="education__content">
                <p className="degree">Bsc Information Technology</p>
                <p className="collegeName">Karpagam Academy of Higher Education</p>
                <p className="year">2020 - 2023</p>
                <p className="grade">Grade: 7.4 CGPA</p>
              </div>
            </div>

            <div className="resume-btn-div">
              <button>DOWNLOAD CV</button>
            </div>
            
          </div>
            
        </div>

    </div>

    </Element>
  )
}

export default About;
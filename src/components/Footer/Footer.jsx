import React from 'react';
import "../Footer/Footer.css";

const Footer = () => {


  return (

    <footer>

      <div className="footer__container">

          <div className="footer__contentbody">
              <div className="left__content">
                  <div className="myname">
                    <p>LOGANATHAN G</p>
                  </div>
                  <div className="subline">
                    <p>Full Stack Developer</p>
                  </div>
                  
              </div>

              <div className="right__content">
                  <div className="followme">
                    <p>FOLLOW ME</p>
                  </div>
                  <div className="icons-grp">
                    <a href="https://www.linkedin.com/in/loganathan-g" target="blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/G-Loganathan" target="blank"><i className="fa-brands fa-github"></i></a>
                    <a href="https://instagram.com/logannx._?igshid=MTNiYzNiMzkwZA==" target="blank"><i className="fa-brands fa-instagram"></i></a>
                  </div>
              </div>
          </div>

          <div className="center-line">
            <hr />  
          </div>

          <div className="footer__foot">
            <p>Developed by <a href="https://www.linkedin.com/in/loganathan-g" target="blank">Loganathan</a></p>
          </div>

          

      </div>

    </footer>
    
  )
}

export default Footer;